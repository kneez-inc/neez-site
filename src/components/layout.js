import React from "react"
import { Link } from "gatsby"
import neezLogo from "../images/neez-logo.svg"
import "../styles/global.css"
import * as styles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={neezLogo} alt="neez" height="32" />
        </Link>
        <nav className={styles.nav}>
          {/* <Link to="#" className={styles.navLink}>
            OUR TECHNOLOGY
          </Link> */}
          {/* <Link to="#" className={styles.navLink}>
            MISSION
          </Link> */}
          <Link to="/team" className={styles.navLink}>
            Team
          </Link>
          <Link to="/why-neez" className={styles.navLink}>
            Why neez?
          </Link>
          <a href="mailto:jabari@neez.app" className={styles.navLink}>
            Contact
          </a>
        </nav>
      </header>

      <main>{children}</main>

      <footer className={styles.footer} />
    </div>
  )
}

export default Layout

