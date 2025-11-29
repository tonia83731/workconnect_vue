<script setup lang="ts">
  import ButtonDefault from '../ButtonDefault.vue';
  import IconX from '../icons/IconX.vue';
  const props = defineProps<{
      title: string;
      isToggle: string | null;
      onClose?: () => void;
    }>();
</script>
<template>
  <div v-if="props.isToggle" class="fixed top-0 left-0 z-[999] w-full max-w-screen h-full max-h-screen bg-black/30">
    <div class="w-full h-full flex justify-center items-center">
      <div class="w-[90%] md:w-1/2 xl:w-1/3 bg-white rounded-md drop-shadow-md-token">
        <div class="px-4 h-[45px] flex justify-between items-center gap-4 border-b border-line">
          <h5 class="text-lg">{{ props.title }}</h5>
          <button-default :onClick="props.onClose" shape="square-sm" color="text-default">
            <template #button>
              <IconX size="18"/>
            </template>
          </button-default>
        </div>
        <div class="p-4 flex flex-col gap-4">
          <slot name="modal_content"></slot>
          <slot name="modal_button"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
