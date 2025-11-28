<script setup lang="ts">
type Numberish = number | string
const props = withDefaults(
  defineProps<{
    size?: Numberish
  }>(),
  {
    size: 24,
  },
)
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.2581 1.77419L11.0645 7.96774L4.87097 10.2903L2.54839 12.6129L13.3871 23.4516L15.7097 21.129L18.0323 14.9355L24.2258 8.74194M7.96774 18.0323L1 25M16.4839 1L25 9.51613"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
