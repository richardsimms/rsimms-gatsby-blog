import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import { css } from '@emotion/core'
import { useTheme } from 'components/Theming'
import { graphql } from 'gatsby'


export default ({ data: { site } }) => {
  const theme = useTheme()
  return (
    <Layout site={site} >
        <Container
          css={css`
          text-align: center;
        `}
        >        
           <h1
            css={css`
            color: ${theme.colors.text};
            `}
           >NOT FOUND</h1>          
          <p>Nothing found on that URL.</p>
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
