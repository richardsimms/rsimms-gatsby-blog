import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import Form from 'components/form'
import { LinkedIn, GitHub } from './Social'
import Container from './Container'
import { PopupButton } from "react-calendly";


const Footer = ({ author, noSubscribeForm }) => {
  return (
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
          <p>Join designers who get a <b>free weekly email with inspiration</b> to grow as a design who creates value. View previous <a href="https://vbd.substack.com">newsletters</a> to see what's coming.</p>

          <Form></Form>
      {/*     <SubscribeForm /> */}
          <br />
          <p>If you’re looking for a designer to help define your customers experience to deliver business growth—<PopupButton
            

              className="PopupButton"
              pageSettings={{
                backgroundColor: 'ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '00a2ff',
                textColor: '4d5055'
              }}
              
              styles={{}}
              text="let's chat!"
              url="https://calendly.com/richard-simms/30min?"
            />.</p>
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
}
   
  

export default Footer
