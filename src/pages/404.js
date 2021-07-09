import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Message from '../components/ConfirmMessage/Message'

export default ({ data: { site, allMdx, latestArticle } }) => {
  return (
    <Layout site={site} noSubscribeForm>
      <div>
        <Message
          fullscreen
          title={`Nothing found`}
          body={`Sorry, there is nothing at this URL.`}
          note={`[Go back home](/)`}
        />
      </div>
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
