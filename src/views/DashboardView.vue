<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router'
import MoonIcon from '@/components/icons/IconMoon.vue';
import SunSolidIcon from '@/components/icons/IconSunSolid.vue';
import LogoutIcon from '@/components/icons/IconLogout.vue';

const theme = ref<'light' | 'dark'>('light');

watch(theme, (newTheme) => {
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
})

console.log(theme.value)
</script>
<template>
  <header class="fixed top-0 left-0 w-full h-[45px] md:h-[60px] px-4 md:px-6 header-card flex items-center justify-between gap-4">
    <router-link to="/" class="">
      <h3>WORKCONNECT</h3>
    </router-link>

    <nav class="">
      <!-- Dark/Light Mode -->
      <button class="">
        <component :is="theme === 'dark' ? MoonIcon : SunSolidIcon" />
      </button>
      <!-- Language -->
      <!-- Logout -->
       <button class="rotate-180">
        <LogoutIcon :size="18"/>
      </button>
      <!-- User Info -->
    </nav>

  </header>

</template>

<style>

</style>
