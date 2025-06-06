import { h, ref } from 'vue'
import { IconFolder } from '@components/icons/index.js'
import { useRoute } from 'vuepress/client'

import Link from '../Link.vue'
import Xicons from '../global/Xicons.vue'

import type { FunctionalComponent, VNode } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vuepress/client'
import type { MenuLinkGroup, ResolvedSeriesItem } from '../../../types'

const normalizePath = (path: string): string =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(md|html)$/, '')

const isActiveLink = (
  route: RouteLocationNormalizedLoaded,
  link?: string
): boolean => {
  if (link === undefined) {
    return false
  }

  if (route.hash === link) {
    return true
  }

  const currentPath = normalizePath(route.path)
  const targetPath = normalizePath(link)

  return currentPath === targetPath
}

const isActiveItem = (
  route: RouteLocationNormalizedLoaded,
  item: MenuLinkGroup
): boolean => {
  if (item.children) {
    return item.children.some((child) => isActiveItem(route, child))
  }


  if (isActiveLink(route, item.link)) {
    return true
  }

  return false
}

// 全局唯一展开分组 key
const expandedKey = ref<string | null>(null)

const getKey = (item: ResolvedSeriesItem) => item.link || item.text

const togglecollapsible = (e, item, level) => {
  if (level !== 1) return
  const key = getKey(item)
  expandedKey.value = expandedKey.value === key ? null : key
}

const renderItem = (item: ResolvedSeriesItem, level: number, props: VNode['props']): VNode => {
  const key = getKey(item)
  // 只有当前分组 key === expandedKey 时展开，否则折叠
  if (level === 1 && typeof item.collapsible === 'undefined') {
    item.collapsible = expandedKey.value !== key
  } else if (level === 1) {
    item.collapsible = expandedKey.value !== key
  }
  if (item.link) {
    return h(Link, {
      ...props,
      item,
    })
  }

  const titleTag = level === 1 ? 'h5' : 'h6'

  // if the item only has text, render it as `<p>`
  return h(titleTag, { ...props, onClick: (e) => togglecollapsible(e, item, level) }, [
    h(Xicons, {
      icon: level === 1 ? IconFolder : '',
      text: item.text,
      textSize: level === 1 ? 16 : 14
    }),
    level !== 1 ? null : h('span', {
      class: !!item.collapsible ? 'arrow right' : 'arrow down',
    }),
  ])
}

const renderChildren = (item: ResolvedSeriesItem, level: number): VNode | null => {
  if (!item.children?.length) {
    return null
  }

  return h(
    'ul',
    {
      style: {
        display: !!item.collapsible ? 'none' : 'block',
      },
    },
    item.children.map((child) =>
      h(
        'li',
        h(SeriesItem, {
          item: child,
          level
        })
      )
    )
  )
}

export const SeriesItem: FunctionalComponent<{
  item: MenuLinkGroup
  level: number
}> = ({ item, level }) => {
  const route = useRoute()
  const active = level === 1 ? isActiveItem(route, item) : false

  if (item.children) {
    return [
      h(
        'section',
        {
          class: 'series-group series-item',
        },
        [
          renderItem(item, level, {
            class: {
              'series-heading': true,
              [`series-level-${level}`]: true,
              active,
            },
          }),
          renderChildren(item, ++level),
        ]
      ),
    ]
  }

  return [
    renderItem(item, ++level, {
      class: {
        'series-item': true,
        active,
      },
    }),
  ]
}

SeriesItem.displayName = 'SeriesItem'

SeriesItem.props = {
  item: {
    type: Object,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
}
