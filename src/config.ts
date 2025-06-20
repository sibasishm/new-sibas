import type { ThemeConfig } from "@/types"

export const themeConfig: ThemeConfig = {
  color: {
    mode: 'light',
    light: {
      // used for title, hover, etc
      primary: 'oklch(25% 0.005 298)',
      // used for post text
      secondary: 'oklch(40% 0.005 298)',
      background: 'oklch(96% 0.005 298)',
      // used for navbar, selected text, etc
      highlight: 'oklch(0.93 0.195089 103.2532 / 0.5)',
    },
    dark: {
      primary: 'oklch(92% 0.005 298)',
      secondary: 'oklch(77% 0.005 298)',
      background: 'oklch(22% 0.005 298)',
      highlight: 'oklch(0.93 0.195089 103.2532 / 0.2)',
    },
  },
  global: {
    fontStyle: 'sans',
  },
}
