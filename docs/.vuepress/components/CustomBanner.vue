<template>
  <section class="banner-brand__wrapper" :style="{ ...bgImageStyle }">
    <div class="banner-brand__content">
      <h1 class="title" v-if="frontmatter?.customBanner?.title">{{ frontmatter?.customBanner?.title }}</h1>

      <p class="description" v-if="frontmatter?.customBanner?.description">{{ frontmatter?.customBanner?.description }}</p>

      <p class="tagline" v-if="frontmatter?.customBanner?.tagline">{{ frontmatter?.customBanner?.tagline }}</p>


      <div class="btn-group" v-if="buttons.length > 0">
        <Xicons
          v-for="(btn, index) in buttons" :class="btn.type" :key="index"
          :icon="btn.icon"
          :text="btn.text"
          :link="btn.link"
          icon-size="18"
          text-size="14"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, Ref } from "vue";
import { usePageFrontmatter, withBase } from 'vuepress/client'
import Link from 'vuepress-theme-reco/lib/client/components/Link.vue'
import { createOneColor } from 'vuepress-theme-reco/lib/client/utils'

interface CustomBanner {
  title?: string
  description?: string
  tagline?: string
  heroImage?: string
  heroImageStyle?: Record<string, any>
  bgImage?: string
  bgImageStyle?: Record<string, any>
  buttons?: Array<any>
}

interface CustomFrontmatter {
  customBanner?: CustomBanner
}

const frontmatter = usePageFrontmatter() as Ref<CustomFrontmatter>

const heroImage = computed(() => {
  return frontmatter.value?.customBanner?.heroImage
    ? withBase(frontmatter.value?.customBanner?.heroImage)
    : null
})

const buttons = computed(() => {
  return frontmatter.value?.customBanner?.buttons || []
})

const heroImageStyle = computed(
  () => frontmatter.value.customBanner?.heroImageStyle || {}
)

const bgImageStyle = computed(() => {
  const { bgImageStyle, bgImage } = frontmatter.value?.customBanner || {}

  const initBgImageStyle = bgImage ? {
    overflow: 'hidden',
    background: `url(${withBase(bgImage)}) center/cover no-repeat`
  } : {}

  return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
})
</script>

<style scoped>
</style>
