import { createTheming } from '@callstack/react-theme-provider'
import { lighten, darken } from 'polished'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.blue,
      text: colors.black,
      h2: colors.red,
      em: colors.green,
      sectionBg: colors.lightPink,
      bodyBg: colors.gray,
      headerBg: colors.blue,
      sidenoteBg: lighten(0.7, colors.blue),
      link: colors.red,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: lighten(0.05, colors.blue),
      text: colors.white,
      h2: colors.pink,
      em: lighten(0.1, colors.lightGreen),
      sectionBg: colors.red,
      sidenoteBg: darken(0.07, colors.blue),
      bodyBg: colors.black,
      headerBg: darken(0.1, colors.blue),
      link: colors.pink,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
