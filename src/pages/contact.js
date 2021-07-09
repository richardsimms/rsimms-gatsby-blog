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
  }
`
