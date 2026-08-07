import * as React from "react"
// import { Link } from "gatsby"

const Footer = () => (
    <footer
        style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
        }}
    >
        © Le Cinquieme Chat / The Fifth Cat {new Date().getFullYear()}
    </footer>
)

export default Footer
