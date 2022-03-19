import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const { path } = require('@vuepress/utils')

export const sidebar = [
    {
      text: 'Getting Started',
      children: [
        {
          text: 'Installation',
          link: '/getting-started/installation.md'
        },
        {
          text: 'Styling',
          link: '/getting-started/styling.md'
        }
      ]
    },
    { 
      text: 'Components',
      children: [
        {
          text: 'Button',
          link: '/components/button'
        },
        {
          text: 'Navigation',
          link: '/components/navigation'
        },
        {
          text: 'Table',
          link: '/components/table'
        },
      ]
    }
  ]


export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'en-US',
  title: 'Unlocked',
  description: 'Unlocked UI component documentation',
  // theme and its config
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    docsRepo: 'ryanweston/unlocked-docs',
    repo: 'ryanweston/',
    sidebar,
    // logo: 'https://vuejs.org/images/logo.png',
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
})