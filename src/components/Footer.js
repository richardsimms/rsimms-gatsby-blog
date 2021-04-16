import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
//import SubscribeForm from './Forms/Subscribe'
import Form from 'components/form'
import { LinkedIn, GitHub } from './Social'
import Container from './Container'
import Link from 'components/Link'

const Footer = ({ author, noSubscribeForm }) => (
  <footer id="subscribe">
    <Container
      css={css`
        padding-top: 0;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      {!noSubscribeForm && (
        <div>
            <h3 
              css={css`
              font-size: 1rem;
            `}
            >
            Grow your value-based design practice in just 5 mins a week
          </h3>
          <p>Join other designers who get a <b>free weekly email with inspiration</b> to grow as a design who creates value. View previous <a href="https://vbd.substack.com">newsletters</a> to see what's comming.</p>

          <Form></Form>
      {/*     <SubscribeForm /> */}
          <br />
          <p>If you’re looking for a designer to help define your customers experience to deliver business growth—<Link to="/contact">let’s chat</Link>.</p>
          
          
        </div>
      )}
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
        >
          {author && `${author} \u00A9 ${new Date().getFullYear()}`}
        </div>
        <div>
          <LinkedIn />
          <GitHub />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
