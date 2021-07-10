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
    <Layout site={site} noSubscribeForm>
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
      <p>As the lead UX designer at Open Universities Australia, I often wear many hats but my focus is always to ensure that we are creating valuable experiences for our students and university partners that helps meet our business objectives.</p>
      <p>I am responsible for:
            <ul>
                  <li>Managing the UX research process<\li>
                  <li>Delivering an effective product design capability in collaboration with the Product managers and the CPO, applying the lean principles and agile<\li>
                  <li>methodologies appropriate to the task<\li>
                  <li>Working in collaboration with product leadership to interpret and realise company and product strategy within the product teams<\li>
                  <li>Recruiting, developing and motivating a team of product designers embedded within the cross functional product teams<\li>
                  <li>Ensuring visual design consistency across the website and driving the adoption of our in-house design language system<\li>
                  <li>Turning product roadmaps into people plans to ensure teams have enough design capacity and that sufficient discovery work-ahead has been scheduled<\li>
                  <li>Collaborating with other product, engineering and platform leads to elaborate and drive the technology strategy<\li>
                  <li>Conducting design sprints<\li>
                  <li>Creating UX concepts, wireframes, and visual designs for implementation<\li>
                  <li>Reviewing data and coming up with hypotheses on how to improve processes and products<\li>
                  <li>Managing and updating our design system and brand periodically<\li>
            <\ul>
        <br />
      <Link
              to="/oua"
              aria-label={`view Open Universities Australia contiuous research case study`}
            >
              Read case study →
      </Link>
      </p>
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
  }
`