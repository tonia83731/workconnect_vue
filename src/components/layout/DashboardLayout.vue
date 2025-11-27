<script setup lang="ts">
import TopBar from '@/components/headers/TopBar.vue'
</script>
<template>
  <TopBar />
  <div class="w-[90%] xl:w-full max-w-[1024px] mx-auto mt-[90px] md:mt-[120px]">
    <slot name="dashboard_layout"></slot>
  </div>
</template>
