<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { Field } from 'vee-validate';
  const props = withDefaults(defineProps<{
    name: string;
    type?: string;
    label?: string;
    placeholder?: string;
    rules?: string | Record<string, any> | ((value: any) => boolean | string | Promise<boolean | string>);
    errors?: string;
    }>(), {
    type: 'text',
  });
</script>
<template>
  <div class="flex flex-col gap-1">
    <label :for="props.name" v-if="props.label">{{ props.label }}</label>
    <Field
      :id="props.name"
      :name="props.name"
      :type="props.type"
      :placeholder="props.placeholder"
      :rules="props.rules"
      class="mt-1.5"
      />
    <p v-if="props.errors" class="text-error">{{ props.errors }}</p>
  </div>
</template>
