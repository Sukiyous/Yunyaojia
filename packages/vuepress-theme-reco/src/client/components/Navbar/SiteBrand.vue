<script lang="ts" setup>
import { toRefs } from 'vue'
import SafeRouterLink from '@components/SafeRouterLink.vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
})

const { title, icon, link } = toRefs(props)
</script>

<template>
  <div class="site-brand">
    <img
      v-if="icon"
      class="logo"
      :src="icon"
      :alt="title"
    />

    <SafeRouterLink
      v-if="title"
      :to="link"
      class="site-name"
      :class="{ 'can-hide': icon }"
    >
      {{ title }}
    </SafeRouterLink>
  </div>
</template>

<style>
.site-brand {
  @apply flex text-xl font-semibold;
  .logo {
    @apply mr-4 inline-block w-8 h-8 rounded-lg;
  }
}
</style>
