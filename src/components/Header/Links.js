import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'


export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/casestudies" activeClassName="active" aria-label="View my work">
      Case studies
      </Link>
      <Link to="/blog" activeClassName="active" aria-label="View latestes articles">
        Articles
      </Link>
      <Link to="/about" activeClassName="active" aria-label="View bio page">
        About
      </Link>

      <ThemeToggler
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
