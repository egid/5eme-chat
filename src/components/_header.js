import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"
import IconFacebook from "../images/logo-facebook.svg"
import IconInstagram from "../images/logo-instagram.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <StaticImage
        className="logo"
        src="../images/logo-en@2x.png"
        placeholder="none"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "png"]}
        alt=""
      />
      <StaticImage
        className="header-cat"
        src="../images/art-cat-zoom.png"
        loading="lazy"
        placeholder="none"
        width={400}
        quality={95}
        formats={["auto", "webp", "png"]}
        alt=""
      />
      <h1 className="sr-only">Le Cinquième Chat - The Fifth Cat</h1>
    </Link>

    <ul className={styles.textCenter}>
      <li><a href="https://www.facebook.com/5eme.chat" target="_blank" rel="noreferrer"><IconFacebook className={styles.iconExt} /></a></li>
      <li><a href="https://instagram.com/5th.cat" target="_blank" rel="noreferrer"><IconInstagram className={styles.iconExt} /></a></li>
    </ul>
  </header>
)

export default Header
