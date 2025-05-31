<template>
  <div v-if="tags && tags.length" class="tag-list">
    <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
  </div>
</template>

<script setup>
import { usePageFrontmatter } from 'vuepress/client'
const frontmatter = usePageFrontmatter()
const tags = frontmatter.value.tags
</script> 