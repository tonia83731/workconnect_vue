<script setup lang="ts">
import { type IconType, IconTypes } from '.'
type Numberish = number | string
withDefaults(
  defineProps<{
    type: IconType
    size?: Numberish
  }>(),
  {
    size: 24,
  },
)
</script>
<template>
  <component :is="IconTypes[type]" :size="size" />
</template>
