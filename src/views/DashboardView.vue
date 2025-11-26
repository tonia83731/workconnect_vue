<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router'
import IconMoon from '@/components/icons/IconMoon.vue';
import IconSunSolid from '@/components/icons/IconSunSolid.vue';
import IconLogout from '@/components/icons/IconLogout.vue';
import IconUser from '@/components/icons/IconUser.vue';
import ButtonDefault from '@/components/ButtonDefault.vue';

const theme = ref<'light' | 'dark'>('light');
const locale = ref<'en' | 'zhTW'>('en');

watch(theme, (newTheme) => {
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
})

</script>
<template>
  <header class="fixed top-0 left-0 w-full h-[45px] md:h-[60px] px-4 md:px-6 header-card flex items-center justify-between gap-4">
    <router-link to="/" class="">
      <h3>WORKCONNECT</h3>
    </router-link>

    <nav class="flex items-center gap-2">
      <!-- Dark/Light Mode -->
       <button-default :shape="'circle-md'" :color="'border-default'">
         <component :is="theme === 'dark' ? IconMoon : IconSunSolid" />
       </button-default>
      <!-- Language -->
        <button-default :shape="'circle-md'" :color="'border-default'">
          <span v-if="locale === 'zhTW'">中</span>
          <span v-else>EN</span>
       </button-default>
      <!-- Logout -->
       <button-default :class="'rotate-180'" :shape="'circle-md'" :color="'border-default'">
         <IconLogout :size="18"/>
       </button-default>
      <!-- User Info -->
       <button-default :class="'ml-2'" :shape="'circle-md'" :color="'border-default'">
        <IconUser :size="18"/>
       </button-default>
    </nav>

  </header>

</template>

<style>

</style>
