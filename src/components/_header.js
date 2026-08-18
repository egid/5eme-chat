import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/_header.module.css"
import * as stylesGlobal from "../components/index.module.css"
import IconFacebook from "../images/logo-facebook.svg"
import IconInstagram from "../images/logo-instagram.svg"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
      className={styles.headerLink}
    >
      <StaticImage
        className={styles.logo}
        src="../images/logo-en@2x.png"
        placeholder="none"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "png"]}
        alt=""
      />
      <h1 className="sr-only">Le Cinquième Chat - The Fifth Cat</h1>
    </Link>
    <StaticImage
      className={styles.headerCat}
      src="../images/art-cat-zoom.png"
      loading="lazy"
      placeholder="none"
      width={200}
      quality={95}
      formats={["auto", "webp", "png"]}
      alt=""
    />

    <ul className={styles.socialLinks}>
      <li><a href="https://www.facebook.com/5eme.chat" target="_blank" rel="noreferrer"><IconFacebook className={stylesGlobal.iconExt} /></a></li>
      <li><a href="https://instagram.com/5th.cat" target="_blank" rel="noreferrer"><IconInstagram className={stylesGlobal.iconExt} /></a></li>
    </ul>
  </header>
)

export default Header
