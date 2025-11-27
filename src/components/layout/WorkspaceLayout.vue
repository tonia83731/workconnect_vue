<script setup lang="ts">
import TopBar from '../headers/TopBar.vue'
import SideBar from '../headers/SideBar.vue'
const props = defineProps<{
  title: string
  subtitle?: string
}>()
</script>
<template>
  <SideBar />
  <div class="">
    <TopBar :include-icon="false" />
    <div
      class="ml-[60px] lg:ml-[240px] w-[calc(100%-60px)] lg:w-[calc(100%-240px)] mt-[90px] md:mt-[120px]"
    >
      <div class="w-[90%] xl:w-full max-w-[900px] mx-auto">
        <h1>{{ props.title }}</h1>
        <slot name="workspace_layout"></slot>
      </div>
    </div>
  </div>
</template>
