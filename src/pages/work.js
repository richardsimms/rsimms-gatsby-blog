import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'
import { bpMaxSM } from '../lib/breakpoints'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.blue};
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          Selected case studies
        </h1>
      </Container>
      <div
        css={css`
        height: 150px;
        overflow: hidden;
        `}
      />
    </section>
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero />
      <div 
      css={css`
      background: ${theme.colors.green};
    `}
      ></div>
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            {post.fields.banner && (
              <div
                css={css`
                  padding: 60px 60px 40px 60px;
                  ${bpMaxSM} {
                    padding: 20px;
                  }
                `}
              >
                <Link
                  aria-label={`View ${post.fields.title} article`}
                  to={`/${post.fields.slug}`}
                >
                  
                </Link>
              </div>
            )}
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.fields.slug}
                aria-label={`View ${post.fields.title}`}
              >
                {post.fields.title}
              </Link>
            </h2>
            <Description>
              {post.excerpt}{' '}
              </Description>
{/*               <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read more →
              </Link> */}
            
          </div>
        ))}
        
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(limit: 10, sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {categories: {eq: "work"}, published: {ne: false}}}) {
      edges {
        node {
          fields {
            slug
            title
            date
            isPost
            description
            banner {
              id
              publicURL
              childImageSharp {
                id
                
              }
            }
          }
          excerpt(pruneLength: 190)
          id
        }
      }
    }
  }
`