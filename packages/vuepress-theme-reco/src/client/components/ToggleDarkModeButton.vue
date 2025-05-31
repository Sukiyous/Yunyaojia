<template>
  <Xicons
    :icon="icon"
    icon-size="20"
    class="btn-toggle-dark-mode"
    @click="toggleMode()"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, Ref } from 'vue'
import { IconBrightnessContrast, IconMoon, IconSun } from '@components/icons/index.js'
import { useThemeLocaleData } from '@composables/index.js'

const ModeIcon = {
  light: IconSun,
  dark: IconMoon,
  auto: IconBrightnessContrast
}

enum EMode {
  dark,
  light
}

type TMode = keyof typeof EMode

const themeConfig = useThemeLocaleData()

const APPEARANCE_KEY = 'vuepress-reco-color-scheme'

const mode: Ref<TMode> = ref('light')

const icon = computed(() => {
  return ModeIcon[mode.value]
})

let toggleMode = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  const userPreference = localStorage[APPEARANCE_KEY]

  if (userPreference) {
    mode.value = userPreference
  }

  const classList = document.documentElement.classList

  function setDarkClass(dark: boolean): void {
    classList.toggle('dark', dark)
  }

  function handleModeChange(m) {
    setDarkClass(m === 'dark')
    localStorage[APPEARANCE_KEY] = m
  }

  // 监听手动切换 mode
  watch(mode, handleModeChange)

  handleModeChange(mode.value)
})
</script>
