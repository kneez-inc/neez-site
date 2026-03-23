import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import * as styles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          kneez
        </Link>
        <nav className={styles.nav}>
          {/* <Link to="#" className={styles.navLink}>
            OUR TECHNOLOGY
          </Link> */}
          {/* <Link to="#" className={styles.navLink}>
            MISSION
          </Link> */}
          <Link to="#" className={styles.navLink}>
            Team
          </Link>
          <Link to="#" className={styles.navLink}>
            Get In Touch
          </Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className="container">
          <h2 className={styles.footerTitle}>Move with less pain</h2>
          <Link to="#" className="button button-secondary">
            CONTACT US
          </Link>
          <div className={styles.footerLogo}>kneez</div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

