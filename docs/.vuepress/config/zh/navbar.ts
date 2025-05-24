export const navbar = [
  { text: '首页', link: '/', icon: 'IconHome' },
  { text: '操作指南', link: '/docs/guide/introduce', icon: 'IconCompass' },
  {
    text: '参考',
    icon: 'IconDocument',
    children: [
      {
        text: '配置',
        children: [
          {
            text: 'Vuepress 配置',
            link: 'https://v2.vuepress.vuejs.org/zh/reference/config.html',
          },
          { text: 'Frontmatter', link: '/docs/theme/frontmatter-home' },
          { text: '主题配置', link: '/docs/theme/home' },
          { text: 'Markdown 扩展', link: '/docs/theme/custom-container' },
        ],
      },
    ],
  },
  { text: '博客', link: '/posts', icon: 'IconDocumentAttachment' },
  { text: '案例', link: '/docs/others/examples', icon: 'IconFire' },
]
