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
           <p>Hi! I’m Richard Simms a user experience designer, I've consultant for the better part of fifteen years. I’m obsessed about crafting amazing digital products. Through design rigger, I increase confidence in assumptions to create better experiences people are willing to change their behaviour for.</p>
           <p>I’ve had the pleasure to work with <b>Diageo</b>, <b>Sky Sports</b>, <b>Coutts bank</b>, <b>Suncorp</b>, <b>MasterCard</b>, and many more household name brands. I'm currently crafting experiences at <b>Open Universities Australia</b>.</p>

            <p>If you have additional questions, you can <a href="mailto:&#x72;&#x69;&#x63;&#x68;&#x61;&#x72;&#x64;@&#x72;&#x73;&#x69;&#x6d;&#x6d;&#x73;.&#x63;&#x6f;&#x6d;">email me</a> directly.</p>
            <p>When I’m not in front of a screen, you can find <a aria-label="View my strava bio" href="https://www.strava.com/athletes/12283677">me on a bike</a>, riding through the Australian bush or at least finding my Zen on Beach Road, Melbourne, AU.</p>
            <hr />
            <h2>Happening now</h2>
            <p>As of May 2021:</p>
            <ul>
              <li>Launching a self-service product for  University partners to manage their students.</li>
              <li>Reading: <a target="_blank" rel="noopener noreferrer" aria-label="Working Backwards detail page on Amazon" href="https://www.amazon.com/gp/product/1250267595/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1250267595&linkCode=as2&tag=rsimms-20&linkId=0d200c54af376416d7135e5b4fc70300">Working Backwards: Insights, Stories, and Secrets from Inside Amazon</a>.</li>
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
