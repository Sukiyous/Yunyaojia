<template>
  <li>
    <div
      :class="['page-catalog-item', { active, collapsible: hasChildren }]"
      @click="toggleCollapse"
      style="cursor: pointer; user-select: none;"
    >
      <span v-if="hasChildren">
        <span v-if="collapsed">▶</span>
        <span v-else>▼</span>
      </span>
      <Link :item="item" />
    </div>
    <ul v-if="hasChildren && !collapsed">
      <CatalogItem
        v-for="child in item.children"
        :key="child.link || child.text"
        :item="child"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref, computed, defineComponent, defineAsyncComponent } from 'vue'
import { useRoute } from 'vuepress/client'
import Link from '@components/Link.vue'
import type { ResolvedSeriesItem } from '../../../types/nav'

const props = defineProps<{ item: ResolvedSeriesItem }>()

const route = useRoute()
const hasChildren = computed(() => props.item.children && props.item.children.length > 0)
const active = computed(() => isActiveItem(props.item))
const collapsed = ref(true)

const isActiveItem = (item: any): boolean => {
  if (route.hash === item.link) return true
  if (item.children) return item.children.some((child: any) => isActiveItem(child))
  return false
}

function toggleCollapse() {
  if (hasChildren.value) collapsed.value = !collapsed.value
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