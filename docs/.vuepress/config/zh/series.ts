export const series = {
  // todo README.md 无法展示，没有对 '' 进行处理
  //指南页面侧边栏设置
  '/docs/guide/': [
    {
      text:'基础档案',
      children:['introduce','getting-started'],
    },
    
    {
      text:'测试',
      children:['gui-builder','package-manager','custom-style','style','icon','bundler','builtin-page','folder-specification','register-components','register-layouts','contribute'],
    }
  ],

  //参考页面侧边栏设置
  '/docs/theme/': [
    {
      text: 'Frontmatter',
      children: ['frontmatter-home', 'frontmatter-page'],
    },
    {
      text: '主题配置',
      children: [
        {
          text: 'Locale 配置',
          children: [
            'home',
            'source-dir',
            'git',
            'series',
            'navbar',
            'comments',
            'password',
            'appearance',
            'social-links',
            'pages',
            'doc-search',
            'auto-set-category',
            'auto-set-series',
            'custom-primary-color',
          ]
        },
        {
          text: '多语言',
          children: [
            'multilingual'
          ]
        }
      ],
    },
    
    {
      text: 'Markdown 扩展',
      children: [
        'custom-container',
        'markdown-task',
        'markdown-vue-preview',
        'markdown-file-parse',
      ],
    },
  ],

}
