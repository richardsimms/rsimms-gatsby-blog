import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/casestudies" activeClassName="active" aria-label="View my work">
        Work
      </Link>
      <Link to="/blog" activeClassName="active" aria-label="View latestes articles">
        Blog
      </Link>
      <Link to="/contact" activeClassName="active" aria-label="View bio page">
        Contact
      </Link>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
