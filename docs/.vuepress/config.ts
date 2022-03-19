import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export const sidebar = [
    {
      text: 'Getting Started',
      children: [
        {
          text: 'Installation',
          link: '/introduction/getting-started.md'
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
  theme: '@vuepress/theme-default',
  themeConfig: {
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