<script setup lang="ts">

  const props = withDefaults(
  defineProps<{
    type?: "button" | "submit";
    shape?: keyof typeof shapeClasses;
    color?: keyof typeof colorClasses;
    class?: string;
    onClick?: () => void;
  }>(),
  {
    type: "button",
    shape: "default-md",
    color: "primary",
    class: "",
  }
)

const rectSizeMap = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const fixedSizeMap = {
  sm: "w-6 h-6 md:w-8 md:h-8",
  md: "w-8 h-8 md:w-10 md:h-10",
  lg: "w-10 h-10 md:w-12 md:h-12",
};

const center = "flex items-center justify-center";

const shapeClasses = {
  // ----- Default -----
  "default-sm": rectSizeMap.sm,
  "default-md": rectSizeMap.md,
  "default-lg": rectSizeMap.lg,

  // ----- Circle -----
  "circle-sm": `${fixedSizeMap.sm} rounded-full ${center}`,
  "circle-md": `${fixedSizeMap.md} rounded-full ${center}`,
  "circle-lg": `${fixedSizeMap.lg} rounded-full ${center}`,

  // ----- Square -----
  "square-sm": `${fixedSizeMap.sm} ${center}`,
  "square-md": `${fixedSizeMap.md} ${center}`,
  "square-lg": `${fixedSizeMap.lg} ${center}`,

  // ----- Rounded -----
  "rounded-sm": `${rectSizeMap.sm} rounded-sm`,
  "rounded-md": `${rectSizeMap.md} rounded-md`,
  "rounded-lg": `${rectSizeMap.lg} rounded-lg`,

  // ----- Underline -----
  "underline-sm": `${rectSizeMap.sm} underline underline-offset-2`,
  "underline-md": `${rectSizeMap.md} underline underline-offset-2`,
  "underline-lg": `${rectSizeMap.lg} underline underline-offset-2`,
};


const colorClasses = {
  primary: "bg-action-background text-action-text disabled:bg-action-disabled",
  secondary: "bg-action-background-secondary text-action-text-secondary disabled:bg-action-disabled-secondary",
  "border-default": "border border-foreground text-foreground disabled:border-foreground-disabled disabled:text-foreground-disabled",
  "border-primary": "border border-action-text text-action-text disabled:border-action-disabled disabled:text-action-disabled",
  "text-default": "text-foreground disabled:text-foreground-disabled",
  "text-primary": "text-action-text disabled:text-action-disabled",
}

</script>
<template>
  <button
    :type="props.type"
    class="cursor-pointer"
    :class="[shapeClasses[props.shape], colorClasses[props.color], props.class]"
    @click="props.onClick"
  >
    <slot></slot>
  </button>
</template>
  <RouterView />
