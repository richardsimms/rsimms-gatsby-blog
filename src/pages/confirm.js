import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Message from '../components/ConfirmMessage/Message'
import {
  PleaseConfirmIllustration,
} from '../components/ConfirmMessage/Illustrations'

export default ({ data: { site, allMdx, latestArticle } }) => {
  return (
    <Layout site={site} noSubscribeForm>
      <div>
        <Message
          fullscreen
          illustration={PleaseConfirmIllustration}
          title={`Great, one last thing...`}
          body={`We just sent you an email with the confirmation link. 
          **Please check your inbox!**`}
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
