import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Message from '../components/ConfirmMessage/Message'
import {
  UnsubscribeIllustration,
} from '../components/ConfirmMessage/Illustrations'

export default ({ data: { site,} }) => {
  return (
    <Layout site={site} noSubscribeForm>

      <div>
        <Message
          fullscreen
          illustration={UnsubscribeIllustration}
          title={`You have been unsubscribed.`}
          body={`As per your request, you have been unsubscribed from all our mailings.`}
          note={`Changed your mind? [Resubscribe anytime](/#subscribe)`}
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
