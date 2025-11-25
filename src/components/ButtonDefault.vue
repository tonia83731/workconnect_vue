<script setup lang="ts">

  const props = defineProps<{
    // Add any props if needed in the future
    style?: string;
    onClick?: () => void;
  }>()
</script>
<template>
  <button :class="props.style" @click="props.onClick">
    <slot></slot>
  </button>
</template>
  <RouterView />
