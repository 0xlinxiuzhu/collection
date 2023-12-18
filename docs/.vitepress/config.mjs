import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/collection",
  title: "小小空间",
  description: "小小的我",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: 'https://0xlinxiuzhu.github.io/linxiuzhu' }
    ],

    sidebar: [
      {
        text: '林修竹作品集',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'test', link: '/encryption' },
          { text: 'helloworld', link: '一年级/100-helloworld' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://0xlinxiuzhu.github.io' }
    ]
  }
})
