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
    name="Newsletter" method="POST" netlify="true" action="/confirm">
        <input 
          css={css`
          flex-wrap: nowrap;
          flex-direction: row;
          align-content: space-around;
          justify-content: space-evenly;
          `}

        type="hidden" name="form-name" value="Newsletter" />
        <p
        css={css`
        padding-right: 1rem;
        `}
        ><label>First name: <input type="text" name="name" placeholder="Name (optional)" /></label></p>
        <p
        css={css`
        padding-right: 1rem;
        `}
        ><label>Your best email address? <input type="email" name="email" placeholder="Your email" required /></label></p>
        <p><Button type="submit">
          <p
            css={css`
            padding: 12px 42px;

            `}>Start growing!</p>
            </Button></p>
      </form>
  );
}
