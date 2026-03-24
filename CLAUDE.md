# neez-site

> **Brand note**: "neez" is the public-facing brand name (always lowercase unless starting a sentence). "Kneez" is only used in legal/incorporation contexts.

**Live site**: https://kneez.app
**Repo**: https://github.com/kneez-inc/neez-site

## Git Branching

- Create feature branches off `develop`. Never commit directly to `main` or `develop`.
- Push feature branches and create a pull request to `develop` for review.
- PRs from `develop` to `main` for production releases.
- Commit messages: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`

## Windows Development

- Use `cross-env` for environment variables in npm scripts
- No bash-specific syntax in npm scripts

## Agent Usage

- Make extensive use of agents (subagents) for research, file exploration, and multi-step tasks. This keeps the main context window small and reduces token usage.
- Prefer parallel agents when tasks are independent (e.g., reading multiple files, researching different parts of the codebase simultaneously).
- Use the Explore agent for broad codebase searches; use direct Glob/Grep only for simple targeted lookups.

## Figma Usage

- Figma screenshots are extremely token-heavy. Only fetch the specific screens needed for the current task, not all at once.
- Prefer `get_design_context` (returns code/metadata) over `get_screenshot` when the visual isn't strictly needed.
- When comparing multiple Figma screens, use agents to fetch and analyze designs so images stay in the agent's context, not the main conversation.
- Figma links for all screens are stored in memory — check memory before asking the user for links.

## Project Structure

```
neez-site/
├── gatsby-config.js        # Site metadata, plugins (PostCSS, image processing, react-helmet)
├── gatsby-node.js          # Creates /using-dsg page (DSG template)
├── gatsby-browser.js       # Imports global.css
├── gatsby-ssr.js           # Sets lang="en"
├── tailwind.config.js      # Tailwind v4 with CSS variable-based color tokens
├── postcss.config.js       # @tailwindcss/postcss + autoprefixer
├── src/
│   ├── components/
│   │   ├── layout.js       # Main layout: header (nav), footer, wraps all pages
│   │   ├── layout.module.css
│   │   ├── layout.css      # Base reset/typography (Gatsby starter default)
│   │   ├── header.js       # Unused — layout.js has its own inline header
│   │   ├── index.module.css # Grid list styles (from starter, mostly unused)
│   │   ├── seo.js          # react-helmet SEO component
│   │   └── voiceflow.js    # Voiceflow chat widget (used on demo page)
│   ├── pages/
│   │   ├── index.js        # Homepage: hero (squat.jpg bg), mission section, READ MEMO CTA
│   │   ├── index.module.css # Hero, mission, features, partners section styles
│   │   ├── 404.js          # Not found page
│   │   ├── demo.js         # Demo page with Voiceflow chat widget
│   │   ├── page-2.js       # Starter boilerplate (unused)
│   │   ├── using-ssr.js    # Starter boilerplate (SSR demo)
│   │   └── using-typescript.tsx # Starter boilerplate (TS demo)
│   ├── styles/
│   │   ├── global.css      # Design tokens (CSS vars), utility classes, button styles
│   │   └── styles.css      # Tailwind directives + additional CSS var overrides
│   ├── images/
│   │   ├── team/           # Team member photos: Jabari.jpg, Bryn.jpg, DrChang.jpg, Laura.jpg, Jules.jpg
│   │   ├── squat.jpg       # Hero background image
│   │   ├── kneez-logo.png  # Brand logo
│   │   ├── k-logo.png, k.png # Logo variants
│   │   └── (various knee/joint imagery and logo explorations)
│   └── templates/
│       └── using-dsg.js    # DSG template (starter boilerplate)
```

## Styling Architecture

**Hybrid approach** — three layers:

1. **CSS Modules** (`*.module.css`) — component-scoped styles for layout, hero, mission sections
2. **Global CSS** (`global.css`) — CSS custom properties for design tokens, utility classes (`.container`, `.flex`, `.button-*`)
3. **Tailwind CSS v4** — via PostCSS plugin; used sparingly for utility classes in JSX (`flex`, `flex-end`, `text-primary`)

### Design Token Architecture

All tokens defined in `global.css` (single source of truth):
- **Semantic tokens**: OKLCH color vars (`--primary`, `--foreground`, `--border`, etc.) with light + dark mode
- **Palette scales**: `--primary-50` through `--primary-950` (Au Chico), `--secondary-*` (Sushi), `--tertiary-*` (Mulled Wine)
- **Backward-compat aliases**: `--color-primary` → `var(--primary-600)`, `--color-secondary` → `var(--primary-400)`, `--color-text` → `var(--primary-950)`
- **Spacing**: `--space-1` (4px) through `--space-32` (128px)
- **Radii**: `--radius-xs` (0.125rem) through `--radius-4xl` (2rem)
- **Heading classes**: `.heading-xl` through `.heading-sm` (Geist font, responsive at 80rem)
- **Layout utilities**: `.container-padding-x`, `.section-padding-y`, `.section-title-gap-*`

`layout.css` contains only resets/base element styles (no token definitions).
`styles.css` has Tailwind v4 directives only.
`tailwind.config.js` maps all semantic tokens + palette scales + radii to Tailwind utility classes via `var()` references.

### Fonts

- `--font-sans`: SF Pro → system-ui fallback stack
- `--font-serif`: New York → Georgia fallback
- `--font-mono`: SF Mono → SFMono-Regular fallback
- Headings use Geist (not yet loaded as web font — falls back to `--font-sans`)

## Existing Pages

| Route               | File                      | Status                                              |
| ------------------- | ------------------------- | --------------------------------------------------- |
| `/`                 | `index.js`                | Active — hero + mission sections                    |
| `/team`             | `team.js`                 | Active — responsive card grid, 5 team members       |
| `/demo`             | `demo.js`                 | Active — Voiceflow chat demo                        |
| `/404`              | `404.js`                  | Active                                              |
| `/page-2`           | `page-2.js`               | Starter boilerplate (unused)                        |
| `/using-ssr`        | `using-ssr.js`            | Starter boilerplate                                 |
| `/using-typescript` | `using-typescript.tsx`    | Starter boilerplate                                 |
| `/using-dsg`        | `using-dsg.js` (template) | Starter boilerplate (DSG)                           |

## Navigation

Defined in `layout.js` header:

- **Logo**: neez SVG logo (icon + wordmark, `neez-logo.svg`) → `/`
- **Team**: `/team`
- **Get In Touch**: `#` (placeholder — links to Google Form)

Commented-out nav items: "OUR TECHNOLOGY", "MISSION"

## Key Integrations

- **Voiceflow**: Chat widget loaded via CDN script (`voiceflow.js`), project ID `67a703fe0fe6c98cd39c955a` (hardcoded)
- **gatsby-plugin-image / sharp**: Image optimization pipeline
- **gatsby-plugin-react-helmet**: SEO meta tags
- **gatsby-plugin-manifest**: Configured but commented out

## Build & Deploy

- `npm run develop` — local dev server (Gatsby develop)
- `npm run build` — production build
- `npm run serve` — serve production build locally
- `npm run clean` — clear Gatsby cache
- Deployed at https://kneez.app (deployment platform not specified in config)

## gatsby-config.js Notes

- `siteMetadata` still has Gatsby starter defaults (title, description, author, siteUrl) — needs updating for neez brand
- `gatsby-source-filesystem` for images is declared **twice** — should be deduplicated
- `gatsby-transformer-sharp` is also declared twice

## Team Member Photos Available

Photos already in `src/images/team/`:

- Jabari.jpg
- Bryn.jpg
- DrChang.jpg
- Laura.jpg
- Jules.jpg

## TODO (Rebrand & Team Page)

- [ ] Update `gatsby-config.js` siteMetadata for neez brand
- [x] ~~Rebrand "kneez" → "neez" logo in header and footer~~ (completed 2026-03-23)
- [ ] Rebrand remaining "kneez" text references in content
- [x] ~~Build Team page (`src/pages/team.js`) using existing team photos~~ (completed 2026-03-23)
- [x] ~~Wire up Team nav link → `/team`~~ (completed 2026-03-23)
- [ ] Wire up Get In Touch nav link → contact form/Google Form
- [ ] Clean up starter boilerplate pages (page-2, using-ssr, using-typescript, using-dsg)
- [x] ~~Resolve CSS token conflicts between `global.css`, `layout.css`, and `styles.css`~~ (completed 2026-03-23)
- [ ] Deduplicate `gatsby-source-filesystem` and `gatsby-transformer-sharp` in config
- [ ] Update manifest plugin with neez branding
- [x] ~~Connect Figma MCP and pull design tokens~~ (completed 2026-03-23)

## Figma Design Library

**File**: [Neez-Production](https://www.figma.com/design/VKPykeujUcC8wj5487uU6D/Neez-Production)
**MCP Auth**: bryn@neez.app (View seat on bryn's team, Starter plan)

### Key Frames

| Frame | Name                         | Description                                                                              | URL                                                                                                    |
| ----- | ---------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1     | Theme Settings CSS Variables | Complete CSS variable system — light/dark mode, typography classes, layout utilities     | [link](https://www.figma.com/design/VKPykeujUcC8wj5487uU6D/Neez-Production?node-id=28471-112934&m=dev) |
| 2     | Theme Settings JSON          | Same tokens in shadcn registry JSON format                                               | [link](https://www.figma.com/design/VKPykeujUcC8wj5487uU6D/Neez-Production?node-id=28556-114177&m=dev) |
| 3     | Brand Color Variables        | Comprehensive color palette documentation (all 3 palettes)                               | [link](https://www.figma.com/design/VKPykeujUcC8wj5487uU6D/Neez-Production?node-id=28315-109503&m=dev) |
| 4     | Primary Color                | "Au Chico" primary palette — warm earthy terracotta (50–950 scale)                       | [link](https://www.figma.com/design/VKPykeujUcC8wj5487uU6D/Neez-Production?node-id=28315-109191&m=dev) |
| 5     | Secondary Color              | "Sushi" secondary palette — fresh vibrant green inspired by nature/growth (50–950 scale) | [link](https://www.figma.com/design/VKPykeujUcC8wj5487uU6D/Neez-Production?node-id=28319-111928&m=dev) |
| 6     | Tertiary Color               | "Mulled Wine" tertiary palette — deep sophisticated burgundy/purple (50–950 scale)       | [link](https://www.figma.com/design/VKPykeujUcC8wj5487uU6D/Neez-Production?node-id=28319-112413&m=dev) |
| 7     | 1.0 Splash                   | Splash page — mobile (360px) light/dark mode, logo, "Move with Less Pain" headline       | [link](https://www.figma.com/design/VKPykeujUcC8wj5487uU6D/Neez-Production?node-id=28066-51936&m=dev)  |
| 8     | Assets                       | Logo SVGs, splash hero, exercise images, nav icons, avatar                               | [link](https://www.figma.com/design/VKPykeujUcC8wj5487uU6D/Neez-Production?node-id=28668-10598&m=dev)  |

### Extracted Design Tokens (from Figma, 2026-03-23)

#### Color Palettes

**Primary — "Au Chico"** (warm earthy terracotta for comfort and wellness)

| Step | HEX     | OKLCH                      | Usage                  |
| ---- | ------- | -------------------------- | ---------------------- |
| 50   | #FCF8F8 | oklch(0.982, 0.004, 16.2°) | Subtle bg tint         |
| 100  | #F6EFEF | oklch(0.958, 0.008, 16.7°) | Light bg, accent       |
| 200  | #EEDFDD | oklch(0.915, 0.017, 26.4°) | Border color           |
| 300  | #E0C6C1 | oklch(0.847, 0.03, 30.6°)  |                        |
| 400  | #CFA29D | oklch(0.752, 0.054, 25.7°) | Ring color             |
| 500  | #BA7E79 | oklch(0.653, 0.076, 24.6°) | Dark-mode primary      |
| 600  | #985856 | oklch(0.533, 0.085, 22.2°) | **Light-mode primary** |
| 700  | #874949 | oklch(0.48, 0.084, 20.7°)  | Dark-mode accent       |
| 800  | #723F40 | oklch(0.43, 0.071, 19.2°)  |                        |
| 900  | #63383A | oklch(0.394, 0.061, 17.2°) | accent-foreground      |
| 950  | #351C1D | oklch(0.261, 0.04, 17.5°)  | Foreground text        |

**Secondary — "Sushi"** (fresh vibrant green inspired by nature and growth)

| Step | HEX     |
| ---- | ------- |
| 50   | #F8F9EC |
| 100  | #EFF2D5 |
| 200  | #DFE7AF |
| 300  | #C8D680 |
| 400  | #B2C358 |
| 500  | #99AE3C |
| 600  | #73852B |
| 700  | #586625 |
| 800  | #475222 |
| 900  | #3D4720 |
| 950  | #1F260D |

**Tertiary — "Mulled Wine"** (deep sophisticated burgundy/purple for elegance and depth)

| Step | HEX     |
| ---- | ------- |
| 50   | #F3F4FA |
| 100  | #E9EAF6 |
| 200  | #D7D7EE |
| 300  | #BEBEE3 |
| 400  | #A7A3D6 |
| 500  | #958CC8 |
| 600  | #8374B7 |
| 700  | #7262A0 |
| 800  | #5D5182 |
| 900  | #534B71 |
| 950  | #2D293D |

#### Semantic Color Tokens (OKLCH — Light Mode)

```css
:root {
  --primary: oklch(0.533 0.085 22.218); /* #985856 */
  --primary-foreground: oklch(1 0 0); /* white */
  --primary-muted: oklch(0.982 0.004 17.23); /* very light primary tint */
  --background: oklch(1 0 0); /* white */
  --foreground: oklch(0.261 0.04 17.569); /* #351C1D */
  --accent: oklch(0.958 0.008 17.288); /* #F6EFEF */
  --accent-foreground: oklch(0.394 0.061 17.253); /* #63383A */
  --border: oklch(0.915 0.017 26.655); /* #EEDFDD */
  --input: oklch(0.923 0.003 48.717);
  --ring: oklch(0.752 0.054 25.739); /* #CFA29D */
  --muted: oklch(0.97 0.001 106.424); /* #F5F5F4 */
  --muted-foreground: oklch(0.444 0.01 73.639); /* #57534E */
  --secondary: oklch(0.951 0.038 111.919); /* olive-green tint */
  --secondary-foreground: oklch(0.379 0.061 121.244);
  --tertiary: oklch(0.6 0.101 293.396); /* purple accent */
  --destructive: oklch(0.577 0.215 27.325);
  --destructive-foreground: oklch(0.971 0.013 17.38);
  --warning: oklch(0.962 0.058 95.617);
  --warning-foreground: oklch(0.279 0.074 45.635);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.261 0.04 17.569);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.147 0.004 49.25);
  --chat-foreground: oklch(0.394 0.061 17.253);
  --chat-incoming: oklch(0.958 0.008 17.288);
  --chat-outgoing: oklch(0.985 0.001 106.424);
}
```

#### Semantic Color Tokens (OKLCH — Dark Mode)

```css
.dark {
  --primary: oklch(0.653 0.076 24.614); /* #BA7E79 */
  --primary-foreground: oklch(0.261 0.04 17.569);
  --background: oklch(0.147 0.004 49.25);
  --foreground: oklch(0.982 0.004 17.23);
  --accent: oklch(0.48 0.084 20.674);
  --accent-foreground: oklch(0.982 0.004 17.23);
  --border: oklch(1 0 0 / 0.1);
  --muted: oklch(0.268 0.006 34.297);
  --muted-foreground: oklch(0.716 0.009 56.259);
  --secondary: oklch(0.417 0.072 120.338);
  --secondary-foreground: oklch(0.978 0.017 110.277);
  --tertiary: oklch(0.538 0.096 294.819);
  --destructive: oklch(0.711 0.166 22.216);
  --card: oklch(0.216 0.006 56.043);
  --card-foreground: oklch(0.982 0.004 17.23);
  --primary-muted: oklch(0.394 0.061 17.253);
  --chat-foreground: oklch(0.985 0.001 106.424);
  --chat-incoming: oklch(0.653 0.076 24.614);
  --chat-outgoing: oklch(0.268 0.006 34.297);
}
```

#### Typography

| Token          | Value              |
| -------------- | ------------------ |
| `--font-sans`  | SF Pro, sans-serif |
| `--font-serif` | New York, serif    |
| `--font-mono`  | SF Mono, monospace |

**Heading classes** (use Geist font):

| Class         | Desktop (>80rem)                            | Tablet (≤80rem)                              |
| ------------- | ------------------------------------------- | -------------------------------------------- |
| `.heading-xl` | 3.75rem / weight 500 / tracking -0.09375rem | 3rem / weight 600 / tracking -0.075rem       |
| `.heading-lg` | 3rem / weight 500 / tracking -0.075rem      | 2.25rem / weight 600 / tracking -0.05625rem  |
| `.heading-md` | 2.25rem / weight 600 / tracking -0.05625rem | 1.875rem / weight 600 / tracking -0.04688rem |
| `.heading-sm` | 1.5rem / weight 600 / tracking -0.0375rem   | 1.25rem / weight 600 / tracking -0.03125rem  |

#### Spacing

| Token          | Value |
| -------------- | ----- |
| `--spacing/2`  | 8px   |
| `--spacing/4`  | 16px  |
| `--spacing/6`  | 24px  |
| `--spacing/8`  | 32px  |
| `--spacing/12` | 48px  |
| `--spacing/16` | 64px  |
| `--spacing/24` | 96px  |
| `--spacing/32` | 128px |

#### Layout Utilities

| Class                   | Desktop                | Tablet (≤80rem)      |
| ----------------------- | ---------------------- | -------------------- |
| `.container-padding-x`  | padding-inline: 1.5rem | padding-inline: 1rem |
| `.section-padding-y`    | padding-block: 8rem    | padding-block: 4rem  |
| `.section-title-gap-xl` | gap: 1.5rem            | gap: 1.25rem         |
| `.section-title-gap-lg` | gap: 1.25rem           | gap: 1rem            |
| `.section-title-gap-md` | gap: 1.25rem           | gap: 1rem            |
| `.section-title-gap-sm` | gap: 1rem              | gap: 1rem            |

#### Border Radius

| Token          | Value    |
| -------------- | -------- |
| `--radius-xs`  | 0.125rem |
| `--radius-sm`  | 0.375rem |
| `--radius-md`  | 0.5rem   |
| `--radius-lg`  | 0.625rem |
| `--radius-xl`  | 0.875rem |
| `--radius-2xl` | 1rem     |
| `--radius-3xl` | 1.5rem   |
| `--radius-4xl` | 2rem     |

#### Splash Page Content (from Frame 7)

- **Headline**: "Move with Less Pain"
- **Subtitle**: "Manage knee joint strain with routines that adapt to your needs."
- **CTA**: "Get started" button (white on primary, pill shape, with arrow icon)
- **Layout**: Mobile-first (360px), centered, primary bg (#985856), white card with imagery
- **Logo**: neez SVG logo component (icon + text, 136×40px)
