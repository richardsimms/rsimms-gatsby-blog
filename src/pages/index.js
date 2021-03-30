import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
//import Link from 'components/Link'
import { Link } from 'gatsby'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'

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
            max-width: ${rhythm(20)};
          `}
        >
          Designing for clarity when everything is uncertain
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
      background: ${theme.colors.blue};
    `}
      ><svg preserveAspectRatio="none" width="100%" height="34" viewBox="0 0 1440 140" className="curve">
      <path>
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
            
            M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
            
            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
            
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
            "
            />
        </path>
        </svg></div>
      
      <Container
      css={css`
      grid-column: 2;
    `}
    >
      <h2><a href="https://www.open.edu.au/">Work with me at Open University Australia</a></h2>
      <ul>
        <li>Open Universities Australia is a nonprofit marketplace for higher education across Australia that I lead the usability experience.</li>
        <li>As the lead UX designer at Open Universities Australia, I often wear many hats but my focus is always to ensure that the product teams are creating value for the customer.</li>
        <li>Gathering early input and validation from customers to save time and increase confidence. With a cadence of talking to custmers every four days, created empathy and radically improved the perception of how easy it is to work with Open Universities Australia.</li>
      </ul>
      </Container>
      <Container
        css={css`
        z-index: 1;
      `}
      >
       <img src={require('../images/watering.webp')} alt="Helping grow a plant by watering" />
      </Container>
 
      <section className="callout">
     
        <Container>
          <h2><Link to="/ronascrubs" activeClassName="active" aria-label="View Rona Scrubs">Supporting our healthcare heroes</Link></h2>
          <ul>
            <li>I helped a not for profit charity provide scrubs (uniforms) for healthcare heroes in response to COVID-19. By creating a website that matched local volunteers with healthcare workers who needed scrubs.</li>
            <li>We finished up making over 6,500 free scrubs for healthcare workers across Australia with the help of over 3,000 volunteers and generous donors.</li>
          </ul>
        </Container>
      </section>
      <Container>
      <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square.webp')} alt="Voluntee cutting fabric from a pattern" />
      <img className="Image" src={require('../images/img-nurse.webp')} alt="Halthcare workers wearing scrubs" />
    </div>
    </Container>   
{/*     <Container>
      <h2>Designed a single destination and the place to get your home, car, money and life sorted.</h2>
     <p>I lead and facilitated the <Link to="/suncorp">strategic experience design</Link> of the Suncorp <a href="https://itunes.apple.com/au/app/suncorp-app/id1383025759?mt=8">iOS</a> / <a href="https://play.google.com/store/apps/details?id=au.com.suncorp.marketplace">Android</a> native banking and insurance marketplace. I advocated a user-centered approach in design perspective and practice across the product and stakeholders. Throughout discovery, we continually gathered feedback from customers. We tested everything from the value proposition, the navigation concepts to the desirability of individual features.</p>
      </Container> */}
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
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <Description>
              {post.excerpt}{' '}
              </Description>
          
          </div>
        ))}
       {/*  <Link to="/blog" aria-label="Visit blog page">
          View all articles
        </Link> */}
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
    allMdx(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        fields: { 
          isPost: { eq: true } 
          categories: { eq: "article" } 
        }             
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                  aspectRatio
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
