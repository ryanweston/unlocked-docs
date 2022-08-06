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
    logo: '/images/logo-dark-small.svg',
    docsRepo: 'UnlockedUI/unlocked-docs',
    repo: 'UnlockedUI/unlocked-docs',
    docsBranch: 'master',
    sidebar,
    logoDark: '/images/logo.svg',
  },
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ],
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