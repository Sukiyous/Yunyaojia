import * as zhConfig from './zh'
import { RecoThemeData } from 'vuepress-theme-reco/lib/types'

export const themeConfig: RecoThemeData = {
  locales: {
    '/': {
      selectLanguageName: '简体中文',
      lastUpdatedText: '最后更新时间',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      catalogTitle: '页面导航',
      tip: '提示',
      info: '信息',
      warning: '警告',
      danger: '危险',
      details: '详情',
      editLinkText: '编辑当前页面',
      notFound: '哇哦，没有发现这个页面！',
      backToHome: '返回首页'
    }
  },
  colorMode: 'light',//主题颜色默认是浅色
  logo: '/logo.png',
  author: 'reco_luan',
  docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco',
  docsBranch: 'main',
  docsDir: '/docs',
  algolia: {
    appId: '38R2J3MTQC',
    apiKey: '583d3caf699630b08a9bc2d12d599701',
    indexName: 'v2-vuepress-reco-recoluan',
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  socialLinks: [
    {
      icon: 'IconReco',
      link: 'https://qm.qq.com/q/szC5XmCQ5G'
    },
    {
      icon: 'IconRevili',
      link: 'https://www.baidu.com'  // 添加了https://前缀
    }
  ],
}
