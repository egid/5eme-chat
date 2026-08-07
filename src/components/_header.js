import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

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
        src="../images/logo.jpg"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif", "jpeg"]}
        alt=""
        style={{ 
          marginBottom: `var(--space-3)`,
          clear: `both`,
          display: `block`
        }}
      />
      <h1 className="sr-only">Le Cinquième Chat - The Fifth Cat</h1>
    </Link>

    <div className={styles.textCenter}>
      <a href="https://www.facebook.com/5eme.chat" target="_blank" rel="noreferrer">Facebook</a> | <a href="https://instagram.com/5th.cat" target="_blank" rel="noreferrer">Instagram</a>
    </div>
  </header>
)

export default Header
