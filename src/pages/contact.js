import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Message from '../components/ConfirmMessage/Message'


export default ({ data: { site } }) => {
  return (
    <Layout site={site} >
      <div>
        <Message
          fullscreen
          
          title={`Richard Simms`}
          body={`[richard@rsimms.com](richard@rsimms.com)`}
          note={`[LinkedIn profile](https://www.linkedin.com/in/richardsimms)
          `}
        />
      </div>
      
    </Layout>
  )
}

export const latestArticle = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    latestArticle: allMdx(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            title
            slug
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")

            slug
          }
        }
      }
    }
  }
`
