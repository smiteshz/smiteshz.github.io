import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
    </Layout>
  )
}

export default IndexPage


export const pageQuery = graphql`
{
  hero: allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          greetings
          emoji
          subtitlePrefix
          subtitleHighlight
        }
        rawMarkdownBody
      }
    }
  }
}
`