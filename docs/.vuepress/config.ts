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
          text: 'Creating a theme',
          link: '/getting-started/creating-a-theme.md'
        },
        {
          text: 'Design tokens',
          link: '/getting-started/design-tokens.md'
        },
      ]
    },
    { 
      text: 'Components',
      children: [
        {
          text: 'Icon',
          link: '/components/icon.md'
        },
        {
          text: 'Button',
          link: '/components/button'
        },
        {
          text: 'Tooltip',
          link: '/components/tooltip'
        },
        {
          text: 'Link',
          link: '/components/link'
        },
        {
          text: 'Typography',
          link: '/components/typography'
        },
        
      ]
    },
    {
      text: 'Compositions',
      children: [
        {
          text: 'Getting started',
          link: '/compositions/getting-started.md'
        },
      ]
    },
  ]

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'en-US',
  title: 'Unlocked',
  description: 'Unlocked Documentation',
  // theme and its config
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/images/logo.svg',
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