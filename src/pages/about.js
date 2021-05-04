import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'


export default ({ data: { site } }) => {
  
  return (
    <Layout site={site} noSubscribeForm>
        <Container>   
            <img className="Image" src={require('../images/richard.webp')} alt="Richard Simms" />
            <h1>About Richard</h1>
           <p>Hi! I’m Richard Simms a user experience designer, I've consultant for the better part of fifteen years. I’m obsessed about crafting amazing digital products. Through design rigger, I increase confidence in assumptions to create better experiences people are willing to change their behaviour for. I’ve had the pleasure to work with Diageo, Sky Sports, Coutts bank, Suncorp, MasterCard, and many more household name brands.</p>

            <p>If you have additional questions, you can <a href="mailto:richard@rsimms.com">email me</a> directly.</p>
            <p>When I’m not in front of a screen, you can find me on a bike, riding through the Australian bush or at least finding my Zen on Beach Road, Melbourne, AU.</p>
            <hr />
            <h2>Happening now</h2>
            <p>As of May 2021:</p>
            <ul>
              <li>Researching my first book!</li>
              <li>Writing about <a href="https://vbd.substack.com/">value-based design</a> practice </li>
            </ul>
            <hr />
            <h3>Social media</h3>
           <p><a href="https://www.linkedin.com/in/richardsimms">LinkedIn profile</a></p>
           <p><a href="https://www.instagram.com/richardsimms">Instagram</a></p>
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
