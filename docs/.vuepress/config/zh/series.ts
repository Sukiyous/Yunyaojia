export const series = {
  // todo README.md 无法展示，没有对 '' 进行处理

  //指南页面侧边栏设置
  '/docs/guide/': [
    {
      text:'介绍',
      children:['introduce'],
    },
    {
      text:'基础档案',
      children:['/docs/guide/jichudangan/shangpinguanli'],
    },
    {
      text:'库存管理',
      children:[
        '/docs/guide/kucunguanli/ruku',
        '/docs/guide/kucunguanli/sunyi',
      ],
    },
    {
      text:'零售促销',
      children:['/docs/guide/lingshoucuxiao/lingshou'],
    },
    {
      text:'GSP质管',
      children:['/docs/guide/GSPzhiguan/yanghujihua'],
    },
    {
      text:'医保管理',
      children:['/docs/guide/yibaoguanli/yibaojiesuanjilu'],
    },
    {
      text:'溯源管理',
      children:['/docs/guide/suyuanguanli/suyuanguanli'],
    },
    {
      text:'综合查询',
      children:['/docs/guide/zonghechaxun/rukuchaxun'],
    },
    {
      text:'报表分析',
      children:['/docs/guide/baobiaofenxi/baobiaofenxi'],
    },
    {
      text:'设置中心',
      children:['/docs/guide/shezhizhongxin/yonghuguanli'],
    },
    {
      text:'管理员',
      children:['/docs/guide/guanliyuan/admin'],
    },
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
