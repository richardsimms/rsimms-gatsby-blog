import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'

export default ({ data: { site } }) => {
  
  return (
    <Layout site={site} noSubscribeForm>
    <SEO />
        <Container>   
            <img className="Image" src={require('../images/richard.webp')} alt="Richard Simms" />
            <h1>About Richard</h1>
           <p>Hi! I’m Richard Simms a user experience designer, I qualified from a masters in computer animation in 2005 and since then I’ve been designing for broadcast, websites and mobile apps. I’m obsessed about crafting amazing digital products. Through design rigger, I increase confidence in assumptions to create better experiences people are willing to change their behaviour for.</p>
           <p>I’ve had the pleasure to work with <b>Diageo</b>, <b>Sky Sports</b>, <b>Coutts bank</b>, <b>Suncorp</b>, <b>MasterCard</b>, and many more household name brands. I'm currently crafting experiences at <b>SEEK Learning</b>.</p>

            <p>If you have additional questions, you can <a href="mailto:&#x72;&#x69;&#x63;&#x68;&#x61;&#x72;&#x64;@&#x72;&#x73;&#x69;&#x6d;&#x6d;&#x73;.&#x63;&#x6f;&#x6d;">email me</a> directly.</p>
            <p>When I’m not in front of a screen, you can find <a aria-label="View my strava bio" href="https://www.strava.com/athletes/12283677">me on a bike</a>, riding through the Australian bush or at least finding my Zen on Beach Road, Melbourne, AU.</p>
            <hr />
            <h2>Happening now</h2>
            <p>As of August 2021:</p>
            <ul>
              <li>Just started a new role at SEEK and said goodbye to friends and colleagues at Open Universities Australia.</li>
              <li>Reading: Continuous Discovery Habits</li>
              <li>Writing about <a aria-label="View article on value-based design" href="https://vbd.substack.com/">value-based design</a> practice. Connecting the dots between customer value and business outcomes.</li>
            </ul>
            <hr />
            <h3>Social media</h3>
           <p><a href="https://www.linkedin.com/in/richardsimms">LinkedIn profile</a></p>
           <p><a href="https://www.instagram.com/richardsimms">Instagram</a></p>
           <p><a href="https://github.com/richardsimms/">Github</a></p>
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
