import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Form from '../components/form-welcome'

export default ({ data: { site } }) => (
  <Layout site={site} noFooter>
    <Container>
      <h1>It's great to have you here.<h1>
      <p>Let's make sure I get you <em>exactly</em> what you're looking for…</p>

      <Form />
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
