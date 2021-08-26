import React from "react";
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import Button from 'components/Button'

export default function App() {

  return (
    <form 
    css={css`
    button {
      margin-left: 10px;
    }
    .field-error {
      display: block;
      font-size: 80%;
    }
    input,
    label {
      width: 100%;
    }
    ${bpMaxSM} {
      flex-direction: row;
      align-items: flex-start;
      width: auto;
      label,
      input {
        margin: 5px 0 0 0 !important;
        width: 100%;
        display: flex;
        flex-direction: row;
      }
      button {
        margin: 20px 0 0 0;
      }
    }
          `}
    name="Welcome" method="POST" netlify="true" action="/confirm">
        <input 
          css={css`
          flex-wrap: nowrap;
          flex-direction: row;
          align-content: space-around;
          justify-content: space-evenly;
          `}

        type="hidden" name="form-name" value="Welcome" />
        <p
        css={css`
        padding-right: 1rem;
        `}
        ><label>If I was to dedicate the next issue you and the continuous discovery challenge you're facing. What would the issue be about?
          <textarea
              css={css`
              width: 100%;
              `}
            name="message"
            id="welcome-form-message"
            aria-labelledby="welcome form message"
            class="form-textarea"
            placeholder="Let me know the types of things I should write about"
            rows="4"
        ></textarea></label>
          </p>
        <p
        css={css`
        padding-right: 1rem;
        `}
        ><label>Where did you hear about me?
          <textarea
              css={css`
              width: 100%;
              `}
            name="referral"
            id="welcome-form-referral"
            aria-labelledby="welcome form referral"
            class="form-textarea"
            placeholder="What brought you here…"
            rows="2"
        ></textarea></label>
          </p>
        <p><Button type="submit">
          <p
            css={css`
            padding: 12px 42px;

            `}>Write for me</p>
            </Button></p>
      </form>
  );
}
