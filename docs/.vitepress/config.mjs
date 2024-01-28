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
      { text: 'About Me', link: 'https://0xlinxiuzhu.github.io/0xlinxiuzhu' }
    ],

    sidebar: [
      {
        text: '林修竹作品集',
        items: [
          { text: '0300-猜猜他是谁', link: '/3-grade03/0300-猜猜她是谁' },
          { text: '0301-日记',      link: '/3-grade03/0301-日记' },
          { text: '0302-大象来帮忙', link: '/3-grade03/0302-大象来帮忙' },
          { text: '0303-美丽的西湖', link: '/3-grade03/0303-美丽的西湖' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/0xlinxiuzhu/collection' }
    ]
  }
})
