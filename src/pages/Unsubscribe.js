import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Message from '../components/ConfirmMessage/Message'
import {
  UnsubscribeIllustration,
} from '../components/ConfirmMessage/Illustrations'

export default ({ data: { site,} }) => {
  return (
    <Layout site={site} noSubscribeForm>

      <div>
        <Message
          fullscreen
          illustration={UnsubscribeIllustration}
          title={`You have been unsubscribed.`}
          body={`As per your request, you have been unsubscribed from all our mailings.`}
          note={`Changed your mind? [Resubscribe anytime](/#subscribe)`}
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
