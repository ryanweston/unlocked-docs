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
          text: 'Customisation',
          link: '/getting-started/customisation.md'
        }
      ]
    },
    {
      text: 'Styles',
      children: [
        {
          text: 'Creating a theme',
          link: '/styles/creating-a-theme.md'
        },
        {
          text: 'Design tokens',
          link: '/styles/design-tokens.md'
        }
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
          text: 'App bar',
          link: '/components/app-bar'
        },
        {
          text: 'Typography',
          link: '/components/typography'
        },
        {
          text: 'Dropdown',
          link: '/components/dropdown'
        },
        {
          text: 'Footer',
          link: '/components/footer'
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