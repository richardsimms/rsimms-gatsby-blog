import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'



export default ({ data: { site, } }) => {
  return (
    <Layout site={site} noSubscribeForm >
        <Container>        
           <h1>Contact</h1>
            <p><a href="mailto:richard@rsimms.com">richard@rsimms.com</a></p>
           <p><a href="https://www.linkedin.com/in/richardsimms">LinkedIn profile</a></p>
         
  
        </Container>
          <hr />
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
