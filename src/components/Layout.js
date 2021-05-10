import React, { Fragment, useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { darken, lighten } from 'polished'
import { Global, css } from '@emotion/core'
import { ThemeProvider, themes } from './Theming'
import { bpMaxSM } from '../lib/breakpoints'
import mdxComponents from './mdx'
import Header from './Header'
import reset from '../lib/reset'
import { fonts } from '../lib/typography'
import config from '../../config/website'
import Footer from '../components/Footer'


const getGlobalStyles = theme => {
  const noHorizontalPadding = false
  const noVerticalPadding = false
  
  return css`
    body {
      background: ${theme.colors.bodyBg};
      color: ${theme.colors.text};
    }
    &::selection {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }
    a {
      color: ${theme.colors.link};
      text-decoration: none;
      font-weight: 800;
      &:hover,
      &:focus {
        color: ${theme.colors.link};
      }
      &:hover {
        
        color: ${lighten(0.15, theme.colors.link)};
        box-shadow: 0px 2px 0px;
      }
    }
    h1,
    h2 {
      color: ${theme.colors.h2};
    }
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.text};
      a {
        color: ${theme.colors.text};
        &:hover,
        &:focus {
          color: ${theme.colors.text};
        }
      }
    }
    .PopupButton {
      color: ${theme.colors.link};
      font-weight: bold;
      background: ${theme.colors.bodyBg};
      border: none;
      padding: 0;
      border-radius:0;
      
      &:hover {
        border: none;
        padding: 0;
        background: ${theme.colors.bodyBg};
        color: ${lighten(0.15, theme.colors.link)};
        box-shadow: 0px 2px 0px;
      }
    }
    .PopupButton-callout {
      color: ${theme.colors.link};
      font-weight: bold;
      background: ${darken(0.05, theme.colors.sectionBg)};
      border: none;
      padding: 0;
      border-radius:0;

      &:hover {
        border: none;
        padding: 0;
        background: ${darken(0.05, theme.colors.sectionBg)};
        color: ${lighten(0.15, theme.colors.link)};
        box-shadow: 0px 2px 0px;
      }
    }
    .sideNote {
      position: relative;
      width: 100%;
      margin: 0 auto;
      background: ${theme.colors.sidenoteBg};
      border-color: ${theme.colors.primary};
      padding: 24px 32px;
      font-size: 17px;
      margin-top: 48px;
      margin-bottom: 64px;
      border-left: 3px solid;
      border-radius: 3px 6px 6px 3px;
      transition: background 350ms ease 0s;
      max-width: 780px;
      padding: 40px
        ${noHorizontalPadding ? 0 : '40'}px;
      ${bpMaxSM} {
        padding: ${noVerticalPadding ? 0 : '40'}px
          ${noHorizontalPadding ? 0 : '20'}px;
      }
    }
    .sideNote-icon {
      position: absolute;
      top: 0px;
      left: 0px;
      transform: translate(-50%, -50%);
      padding: 2px;
      border-radius: 50%;
      background: ${theme.colors.bodyBg};
    }
    .sideNote-icon-callout {
      position: absolute;
      top: 0px;
      left: 0px;
      transform: translate(-50%, -50%);
      padding: 2px;
      border-radius: 50%;
      background: ${darken(0.05, theme.colors.sectionBg)};
    }
    .sideNote-callout {
      background: ${lighten(0.02, theme.colors.sectionBg)};
      position: relative;
      width: 100%;
      margin: 0 auto;
      border-color: ${theme.colors.primary};
      padding: 24px 32px;
      font-size: 17px;
      margin-top: 48px;
      margin-bottom: 64px;
      border-left: 3px solid;
      border-radius: 3px 6px 6px 3px;
      transition: background 350ms ease 0s;
      max-width: 780px;
      padding: 40px
        ${noHorizontalPadding ? 0 : '40'}px;
      ${bpMaxSM} {
        padding: ${noVerticalPadding ? 0 : '20'}px
          ${noHorizontalPadding ? 0 : '20'}px;
      }
    }
    
    .curve {
      fill: ${theme.colors.bodyBg};
    }
    .callout{
      color: ${theme.colors.text};
      background: ${darken(0.05, theme.colors.sectionBg)};
      width: 100%;
      margin-top: -300px;
      margin-bottom: -200px;
      padding-top: 300px;
      padding-bottom: 200px;
      display: flex;
    }
    ${bpMaxSM} {
      p,
      em,
      strong {
        font-size: 90%;
      }
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 24px;
      }
    }
    hr {
      margin: 50px 0;
      border: none;
      border-top: 1px solid ${theme.colors.gray};
      background: none;
    }
    em {
      font-family: ${fonts.regularItalic};
      color: ${theme.colors.em};
    }
    strong {
      em {
        font-family: ${fonts.semiboldItalic};
      }
    }

    q {
      quotes: "“" "”" "‘" "’";
      font-family: ${fonts.regularItalic};
      color: ${theme.colors.em};
    }
    q::before {
        content: open-quote;
    }
    q::after {
        content: close-quote;
    }
    input {
      border-radius: 4px;
      border: 1px solid ${theme.colors.gray};
      padding: 5px 10px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
      font-family: ${fonts.regular};
      margin-top: 5px;
      ::placeholder {
        opacity: 0.4;
      }
    }
    .gatsby-resp-image-image {
      background: none !important;
      box-shadow: 0;
    }
    button {
      border-radius: 4px;
      background-color: ${theme.colors.primary};
      border: none;
      color: ${theme.colors.white};
      padding: 5px 10px;
      cursor: pointer;
      border: 1px solid ${theme.colors.primary};
      transition: all 150ms;
      :hover {
        background: ${lighten(0.05, theme.colors.primary)};
        border: 1px solid ${lighten(0.05, theme.colors.primary)};
      }
    }
    pre {
      background-color: #061526 !important;
      border-radius: 4px;
      font-size: 16px;
      padding: 10px;
      overflow-x: auto;
      /* Track */
      ::-webkit-scrollbar {
        width: 100%;
        height: 5px;
        border-radius: 0 0 5px 5px;
      }
      ::-webkit-scrollbar-track {
        background: #061526;
        border-radius: 0 0 4px 4px;
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
      }
    }
  `
}

export default ({
  site,
  frontmatter = {},
  children,
  noFooter,
  noSubscribeForm,
}) => {
  const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'default'
    } else {
      return 'default'
    }
  }

  const [themeName, setTheme] = useState(initializeTheme)

  useEffect(() => {
    localStorage.setItem('theme', themeName)
  }, [themeName])

  const toggleTheme = name => setTheme(name)
  const theme = {
    ...themes[themeName],
    toggleTheme: toggleTheme,
  }
  const {
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription
     


  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Global styles={reset()} />
        <Global styles={getGlobalStyles(theme)} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
          `}
        >
          <Helmet
            title={config.siteTitle}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
            ]}
          >
            <html lang="en" />
            <noscript>This site runs best with JavaScript enabled.</noscript>
          </Helmet>
          <Header />
          <MDXProvider components={mdxComponents}>
            <Fragment>{children}</Fragment>
          </MDXProvider>
          {!noFooter && (
            <Footer
              author={site.siteMetadata.author.name}
              noSubscribeForm={noSubscribeForm}
            />
          )}
        </div>
      </Fragment>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author {
        name
      }
      keywords
    }
  }
`
