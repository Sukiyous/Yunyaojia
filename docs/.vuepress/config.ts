import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import { themeConfig } from './config/index'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { containerPlugin } from '@vuepress/plugin-container'

export default defineUserConfig({
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '云药家',//浏览器显示的名字
      description: '知识分享',
    }
  },
  bundler: viteBundler({}),
  theme: recoTheme(themeConfig),
  plugins: [
    containerPlugin({
      type: 'center',
      before: () => '<div class="center">',
      after: () => '</div>',
    }),
    containerPlugin({
      type: 'note',
      before: info => `<div class="custom-block note"><p class="custom-block-title">${info || '注释信息'}</p>`,
      after: () => '</div>',
    }),
  ],
  // debug: true,
})
