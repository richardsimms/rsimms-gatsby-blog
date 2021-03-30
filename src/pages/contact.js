import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'


export default ({ data: { site } }) => {
  const theme = useTheme()
  return (
    <Layout site={site} >
        <Container
          css={css`
          text-align: center;
        `}
        >
           <img className="Image" src={require('../images/richard.webp')} alt="Richard Simms" />
        
           <h1
            css={css`
            color: ${theme.colors.text};
            `}
           >Richard Simms</h1>
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
