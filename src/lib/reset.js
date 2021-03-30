import { css } from '@emotion/core'
import { useTheme } from '../components/Theming'
import typography, { fonts } from '../lib/typography'

const ResetStyles = () => {
  const theme = useTheme()
  return css`
  form {
    margin: 0;
  }
  ul, ol {
    list-style-position: outside;
    margin-left: 0;
    font-size: ${typography.baseFontSize};
    padding-left: 2rem;
    margin-bottom: 2rem;
  }
  li {
    margin: 1rem 0;
    dispaly: flex;
    align-items: baseline;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    font-family: ${fonts.regular}, sans-serif;
    font-style: normal;
    padding: 0;
    margin: 0;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    overflow-y: auto !important;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    transition: 100ms;
    text-decoration: none;
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }

  blockquote {
    border-left: 5px solid ${theme.colors.link};
    padding-left: 1rem !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    font-style: italic;
    p {
      line-height: 1.3 !important;
    }
  }
  [tabindex='-1']:focus {
    outline: none !important;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }

  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${theme.colors.bodyBg};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${theme.colors.bodyBg};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  input,
  button,
  select,
  textarea {
    line-height: inherit;
  }
  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }

  .ImageBlock {
    max-width: 950px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 40px;
    justify-items: center;
  }
  @media (max-width: 720px) {
    .ImageBlock {
      grid-template-columns: 1fr;
    }
  }
  .curve {
    fill: ${theme.colors.bodyBg};
    height: 4rem;
  }
  .visually-hidden { 
    border: 0;
    padding: 0;
    margin: 0;
    position: absolute !important;
    height: 1px; 
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
    clip: rect(1px, 1px, 1px, 1px); /*maybe deprecated but we need to support legacy browsers */
    clip-path: inset(50%); /*modern browsers, clip-path works inwards from each corner*/
    white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
}
`
}

export default ResetStyles
