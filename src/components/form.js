import React from "react";
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'


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
    name="Newsletter" method="POST" netlify="true" action="/messages">
        <input 
          css={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          `}

        type="hidden" name="form-name" value="Newsletter" />
        <p
        css={css`
        padding-right: 1rem;
        `}
        ><label>Your Name: <input type="text" name="name" placeholder="Your name" /></label></p>
        <p
        css={css`
        padding-right: 1rem;
        `}
        ><label>What’s your best email address? <input type="email" name="email" placeholder="Your email" required /></label></p>
        <p><button 
        css={css`
        border-radius: 4px;
        background-color: rgb(31, 71, 83);
        color: rgb(255, 255, 255);
        padding: 5px 10px;
        cursor: pointer;
        border: 1px solid rgb(31, 71, 83);
        transition: all 150ms ease 0s;
        width:200px;

        `}
        
        type="submit">Sign up!</button></p>
      </form>
  );
}
