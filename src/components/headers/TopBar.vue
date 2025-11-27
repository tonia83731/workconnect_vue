<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import IconMoon from '@/components/icons/IconMoon.vue'
import IconSunSolid from '@/components/icons/IconSunSolid.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import IconUser from '@/components/icons/IconUser.vue'
import ButtonDefault from '@/components/ButtonDefault.vue'

const props = withDefaults(
  defineProps<{
    includeIcon?: boolean
  }>(),
  {
    includeIcon: true,
  },
)

const theme = ref<'light' | 'dark'>('light')
const locale = ref<'en' | 'zhTW'>('en')

watch(theme, (newTheme) => {
  document.documentElement.classList.toggle('dark', newTheme === 'dark')
})
</script>
<template>
  <header
    class="fixed top-0 w-full h-[45px] md:h-[60px] px-4 md:px-6 header-card flex items-center"
    :class="props.includeIcon ? 'left-0 justify-between gap-4' : 'justify-end'"
  >
    <router-link v-if="props.includeIcon" to="/" class="">
      <h3>WORKCONNECT</h3>
    </router-link>

    <nav class="flex items-center gap-2">
      <!-- Dark/Light Mode -->
      <button-default :title="'Mode'" :shape="'circle-md'" :color="'border-default'">
        <template #button>
          <component :is="theme === 'dark' ? IconMoon : IconSunSolid" />
        </template>
      </button-default>
      <!-- Language -->
      <button-default :title="'Language'" :shape="'circle-md'" :color="'border-default'">
        <template #button>
          <span v-if="locale === 'zhTW'">中</span>
          <span v-else>EN</span>
        </template>
      </button-default>
      <!-- Logout -->
      <button-default
        :title="'Logout'"
        :class="'rotate-180'"
        :shape="'circle-md'"
        :color="'border-default'"
      >
        <template #button>
          <IconLogout :size="18" />
        </template>
      </button-default>
      <router-link
        to="#"
        className="ml-2 bg-foreground/30 w-8 h-8 md:w-10 md:h-10 rounded-full flex justify-center items-center hover:bg-foreground hover:text-background"
      >
        <IconUser :size="16" />
      </router-link>
    </nav>
  </header>
</template>
