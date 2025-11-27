<script setup lang="ts">
import TopBar from '../headers/TopBar.vue'
import SideBar from '../headers/SideBar.vue'
</script>
<template>
  <SideBar />
  <div class="">
    <TopBar :include-icon="false" />
    <div class="w-[90%] xl:w-full max-w-[1024px] mx-auto mt-[90px] md:mt-[120px]">
      <slot name="workspace_layout"></slot>
    </div>
  </div>
</template>
