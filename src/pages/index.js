import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/_seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Adoptez un chat (français)",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfXLLTRlU5Iyet9byAqJs-2lh_Z8fTWTu_RcdCohvO7x0uy6Q/viewform?usp=send_form",
    description:
      "Formulaire pré-adoption",
  },
  {
    text: "Adopt a cat (english)",
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf996Yu15jDlm9M2aIkX2edYalGLyd7Rja17xFrJp85Z0ORhA/viewform?usp=send_form&pli=1",
    description:
      "Pre-adoption form",
  },
  {
    text: "Support Greek stray cats",
    url: "http://paypal.me/FifthCat",
    description:
      "Contribute via PayPal",
  },
  // {
  //   text: "Donate 1€ a month",
  //   url: "https://www.teaming.net/fifthcat",
  //   description:
  //     "Contribute via Teaming",
  // },
  {
    text: "Become a member",
    url: "https://www.helloasso.com/associations/le-cinquieme-chat-the-fifth-cat",
    description:
      "Contribute via helloasso",
  },
]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`
const utmParameters = ``

const IndexPage = () => (
  <Layout>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {/* {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
