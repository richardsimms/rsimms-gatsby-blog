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
      em: colors.lightGreen,
      sectionBg: colors.red,
      bodyBg: colors.black,
      headerBg: darken(0.05, colors.blue),
      link: colors.pink,
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
