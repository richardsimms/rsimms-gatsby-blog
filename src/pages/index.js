import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import { useTheme } from '../components/Theming'
import { PopupButton } from "react-calendly";
import { Link } from 'gatsby'
import Container from '../components/Container'
import { rhythm } from '../lib/typography'
import Sidenote from '../components/Sidenote-callout'
import CTA from '../components/Button'


const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.headerBg};
        padding: 20px 0 0 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
      `}
    >
      <Container
        css={css`
          display: flex;
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
    
    <div
      css={css`
      background: ${theme.colors.headerBg};
      
      
      `}
      >
      <svg preserveAspectRatio="none" width="100%" height="34" viewBox="0 0 1440 140" className="curve">
      <path>
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
            
            M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
            
            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
            
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
            "
            />
        </path>
        </svg>
      </div>
      
    </section>
    
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({  data: { site, allMdx } }) {
  const theme = useTheme()
   
  return (
    <Layout site={site}>
      <Hero />
      <div ></div>
    
      <Container 
      css={css`
      grid-column: 2;
    `}
      >
        <h2>Do you have a great idea for a product?</h2>
        <h3>You’re probably wondering:</h3>
        <ul>
          <li>Will anyone buy it if I build it?</li>
          <li>Where should I start?</li>
          <li>How do I bring my vision to reality?</li>
        </ul>
        <p>Wouldn’t it be great if you could get your idea out of your head and into a prototype to share with engineers, partners, investors, etc…<br/>I’ll help you validate your idea with your customers and understand their motivations. I have a track record of connecting the dots between business design and customers experience to deliver business growth. Curious to see if we’d be a good fit to work together.</p>
        <CTA type="submit">
        <PopupButton
            css={css`
            z-index: 1;
            background: transparent;
            width: 100%;
            padding: 12px 42px;
            borderRadius: 12px;
            border: none;
            &:hover {
              border: none;
              background: transparent;
            },
          `}
              text="Let's chat"
              url="https://calendly.com/richard-simms/30min?"
            />
      </CTA>
      </Container>
      <Container
        css={css`
        z-index: 1;
        max-height: 680px;
      `}
      >
       <img src={require('../images/watering.webp')} alt="Helping grow a plant by watering" />
      </Container>
 
      <section className="callout">
        <Container>
        <Sidenote>
          <p>Richard helped guide the process of discovery, design and experimentation. Throughout, Richard is always a staunch advocate for the customer. I find Richard to be a great help in making sense of where our priorities should be, and how we can achieve our business goals while never (well, mostly never) compromising our principles. Developing new concepts and thinking big with Richard is unfailingly an inspiring and invigorating activity.</p>
          <em>— Asha Ioculari, Product manager at Open Universities Australia</em>
        </Sidenote> 
       
        <p>If you’re looking for a designer to help define your customers experience to deliver business growth—<PopupButton

              className="PopupButton-callout"
              pageSettings={{
                backgroundColor: '7a7573',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '00a2ff',
                textColor: '4d5055'
              }}
              
              styles={{}}
              text="let's chat!"
              url="https://calendly.com/richard-simms/30min?"
            /></p>
        </Container>
        
      </section>
      <Container>
      <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square.webp')} alt="Voluntee cutting fabric from a pattern" />
      <img className="Image" src={require('../images/img-nurse.webp')} alt="Halthcare workers wearing scrubs" />
    </div>
    </Container>  
    <Container>
          <h2><Link to="/ronascrubs" activeClassName="active" aria-label="View Rona Scrubs">Supporting our healthcare heroes</Link></h2>
          <ul>
            <li>I helped a not for profit charity provide scrubs (uniforms) for healthcare heroes in response to COVID-19. By creating a website that matched local volunteers with healthcare workers who needed scrubs.</li>
            <li>We finished up making over 6,500 free scrubs for healthcare workers across Australia with the help of over 3,000 volunteers and generous donors.</li>
          </ul>
          <Link
              to="/ronascrubs"
              aria-label={`view Rona scrubs case study`}
            >
              Read case study →
          </Link>
        </Container> 
    <Container 
      css={css`
      grid-column: 2;
    `}
      >
        <h2><Link to="/oua" activeClassName="active" aria-label="view Open Universities Australia case study">Continuous customer research practice</Link></h2>
        <p>Achieving an average of talking to customers every five days for over a year. Gathering early input and validation from customers to save time and increase confidence. This empathy approach also radically improved the perception of how easy it is to work with Open Universities Australia.
          <br />
          <Link
              to="/oua"
              aria-label={`view Open Universities Australia case study`}
            >
              Read case study →
      </Link>
        </p>
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
              <Link
              to={`/${post.fields.slug}`}
              aria-label={`view "${post.frontmatter.title}" article`}
            >
              Read Article →
            </Link>
          </div>
        ))}
       <Link to="/blog" aria-label="Visit blog page">
          View all articles
        </Link> 
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
