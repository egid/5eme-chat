import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/_seo"
import * as styles from "../components/index.module.css"
import { graphql } from "gatsby"

const links = [
  {
    text: "Adoptez un chat / Adopt a cat",
    url: "https://www.secondechance.org/refuge/bas-rhin/le-cinquieme-chat-3467/pensionnaires",
    description:
      "Formulaire pré-adoption / pre-adoption form",
  },
  {
    text: "Support Greek stray cats",
    url: "http://paypal.me/FifthCat",
    description:
      "PayPal",
  },
  {
    text: "Faire un don pour les chats grecs",
    url: "https://www.helloasso.com/associations/le-cinquieme-chat-the-fifth-cat",
    description:
      "HelloAsso (CB)",
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

export const query = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/src/content/index/index.en.md/" }) {
      html
    }
  }
`

const IndexPage = ( {data} ) => {
  const index = data.markdownRemark;

  return (
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
      <div dangerouslySetInnerHTML={{ __html: index.html }} />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
