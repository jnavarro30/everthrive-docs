import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/everthrive-docs/',
  title: "EverThrive Docs",
  description: "Software",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/guide_standards/strategy' }
    ],

    sidebar: [
      {
        text: 'Guide & Standards',
        items: [
          { text: 'Test Strategy', link: '/docs/guide_standards/strategy' },
          { text: 'Development', link: '/docs/guide_standards/development' },
          { text: 'Architecture', link: '/docs/guide_standards/architecture' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'Plans',
        items: [
          { text: 'EverThrive', link: '/docs/plans/everthrive' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'Support',
        items: [
          { text: 'Calls', link: '/docs/support/calls' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
