import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from 'components/Layout'
import Link from 'components/Link'
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
        background: ${theme.colors.headerBg};
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



export default function Index({ data: { site } }) {
  
  return (
    <Layout site={site}>
      <Hero />
      <Container>
        <h2
          css={css`
          font-size: 1.25rem;
          
        `}
        
        >I’m obsessed about crafting amazing digital products.</h2>
        <p> Through design rigger, I increase confidence in assumptions to create better experiences people are willing to change their behaviour for. I’ve had the pleasure to work with globally respected brands. Optimising their products and defining experience strategy to create innovative products from concept to market that deliver business growth.</p>
      <br />
      <h3>Open Universities Australia</h3>
      <em>March 2019 – Present</em>
      <p>Supporting five product teams to deliver quant and qual research, wireflows, and concepts. As the lead UX designer at Open Universities Australia, I often wear many hats but my focus is always to ensure that the product teams are creating value for the customer.</p>
      <p>The outcome that I'm most proud to have achieved is that of conducting continuous customer research and achieving an average of talking to customers every 4 days for over a year. Gathering early input and validation from customers to save time and increase confidence. This empathy also radically improved the perception of how easy it is to work with Open Universities Australia.</p>

      <h3>Rona Scrubs Ltd</h3>
      <em>March 2020 – August 2020</em>
      <p>A not-for-profit charitable organisation, creating scrubs (uniforms) for healthcare heroes in response to COVID-19.
        <br />
      <Link
              to="/ronascrubs"
              aria-label={`view Rona scrubs case study`}
            >
              Read case study →
      </Link>
      </p>
      <h3>Outware Mobile</h3>
      <em>2017 – 2019</em>
      <p>Leading the strategic and experience of products from conception to market. Ensuring the vision translated through design craft creates value for the business and is the right fit for the customer needs for <strong>Safe Food Queensland</strong>, <strong>Suncorp App</strong> and <strong>Bunnings</strong>.
      <br />
      <Link
              to="/suncorp"
              aria-label={`view Suncorp App case study`}
            >
              Read Suncorp App case study →
      </Link>
      </p>
      <h3>SapientRazorfish</h3>
      <em>2015 – 2017</em>
      <p>As lead designer within a leading London creative agency, I was responsible for overseeing the experience design websites, mobile apps, and product concepts for <strong>Mastercard</strong>, <strong>HSBC</strong>, <strong>PGA</strong>, <strong>Diageo</strong> and <strong>HCA</strong>.
      <br />
      <Link
              to="/mastercard"
              aria-label={`view Masercard case study`}
            >
              Read Mastercard case study →
      </Link>
      
      <br />
      <Link
              to="/european-tour"
              aria-label={`view PGA Europen Tour case study`}
            >
              Read PGA Europen Tour case study →
      </Link>
      </p>
      {/* <h3>We Are Experience</h3>
      <span>2014 – 2015</span>
      <p>As Service Design Consultant, I specialised in transformation design for clients including <strong>Zurich</strong>, <strong>Savills</strong>, <strong>TFL</strong>, <strong>Coutts</strong> and <strong>Royal Bank of Scotland</strong>.</p>
      <h3>ORM London</h3>
      <span>2013 – 2014</span>
      <p>Working within a digital strategy agency to create style guides, mobile applications, websites and stills photography. Clients including <strong>Royal Bank of Scotland</strong>, <strong>Black Rock</strong> and <strong>Voluntary Service Overseas</strong>.</p>
       */}
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
    allMdx(limit: 10, sort: {order: ASC, fields: frontmatter___date}, filter: {frontmatter: {categories: {eq: "work"}, published: {ne: false}}}) {
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