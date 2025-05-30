<template>
  <li>
    <div
      :class="['page-catalog-item', { active }]"
      style="user-select: none;"
    >
      <Link :item="item" />
    </div>
    <ul v-if="hasChildren">
      <CatalogItem
        v-for="child in item.children"
        :key="child.link || child.text"
        :item="child"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { computed, defineComponent, defineAsyncComponent } from 'vue'
import { useRoute } from 'vuepress/client'
import Link from '@components/Link.vue'
import type { ResolvedSeriesItem } from '../../../types/nav'

const props = defineProps<{ item: ResolvedSeriesItem }>()

const route = useRoute()
const hasChildren = computed(() => props.item.children && props.item.children.length > 0)
const active = computed(() => isActiveItem(props.item))

const isActiveItem = (item: any): boolean => {
  if (route.hash === item.link) return true
  if (item.children) return item.children.some((child: any) => isActiveItem(child))
  return false
}

const CatalogItem = defineAsyncComponent(() => import('./CatalogItem.vue'))

defineComponent({ name: 'CatalogItem' })
</script>

<style scoped>
.page-catalog-item.collapsible {
  font-weight: bold;
}
.page-catalog-item.active {
  color: #3eaf7c;
}
</style> 