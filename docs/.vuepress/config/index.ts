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
  author: 'Doujc',//作者
  docsRepo: 'https://p4mq.bmwwx.cn/ApW7ci',//文档仓库
  docsBranch: 'main',//文档分支
  docsDir: '/docs',//文档目录
  algolia: {
    appId: '38R2J3MTQC',//algolia应用id           
    apiKey: '583d3caf699630b08a9bc2d12d599701',//algoliaapikey
    indexName: 'v2-vuepress-reco-recoluan',//algolia索引名称
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  socialLinks: [
    {
      icon: 'IconGuojia',
      link: 'https://code.nhsa.gov.cn/'//国家医保平台
    },
    {
      icon: 'Iconwx',
      link: 'https://p4mq.bmwwx.cn/ApW7ci'//微信
    },
    {
      icon: 'IconQQ',
      link: 'https://qm.qq.com/q/szC5XmCQ5G'//qq
    },
    {
      icon: 'IconRevili',
      link: 'https://www.baidu.com'  // 百度
    }
  ],
}
