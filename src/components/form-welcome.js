import React from "react";
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import Button from 'components/Button'

export default function App() {

  return (
    <form 
    css={css`
    display: flex;
    align-items: flex-end;
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
      flex-direction: column;
      align-items: flex-start;
      width: auto;
      label,
      input {
        margin: 5px 0 0 0 !important;
        width: 100%;
        display: flex;
        flex-direction: column;
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
          flex-direction: column;
          align-content: space-around;
          justify-content: space-evenly;
          `}

        type="hidden" name="form-name" value="Welcome" />
        <p
        css={css`
        padding-right: 1rem;
        `}
        ><label>If I was to dedicate the next issue you and the continuous discovery challenge you're facing. What would the issue be about?<input type="text" name="name" placeholder="Name (optional)" /></label></p>
        <p
        css={css`
        padding-right: 1rem;
        `}
        ><label>Where did you hear about me?<input type="email" name="email" placeholder="Your email" required /></label></p>
        <p><Button type="submit">
          <p
            css={css`
            padding: 12px 42px;

            `}>Start growing!</p>
            </Button></p>
      </form>
  );
}
