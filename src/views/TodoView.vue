<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import WorkspaceLayout from '@/components/layout/WorkspaceLayout.vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import { ref } from 'vue'

const folderData = [
  { _id: '1', title: 'Personal', order: 1 },
  { _id: '2', title: 'Work', order: 2 },
  { _id: '3', title: 'Shopping', order: 3 },
  { _id: '4', title: 'Health & Fitness', order: 4 },
  { _id: '5', title: 'Finance', order: 5 },
  { _id: '6', title: 'Learning', order: 6 },
  { _id: '7', title: 'Projects', order: 7 },
  { _id: '8', title: 'Errands', order: 8 },
  { _id: '9', title: 'Ideas', order: 9 },
  { _id: '10', title: 'Miscellaneous', order: 10 },
]

const selectedData = ref()
const showedDatas = ref()

const showedMoreData = () => {}
</script>
<template>
  <WorkspaceLayout :title="'Folders and Todos'">
    <template #workspace_layout>
      <div class="">
        <!-- title -->
        <div class="flex justify-between items-center">
          <h4 class="text-2xl">Folders</h4>
          <button-default shape="square-md" color="primary" class="rounded-md" title="Add Folder">
            <template #button>
              <IconPlus />
            </template>
          </button-default>
        </div>
        <!-- content -->
        <div class="">
          <button v-for="f in folderData" :key="f._id" class="">
            <IconFolder class="opacity-60" size="20" />
            <p class="">{{ f.title }}</p>
          </button>
        </div>
      </div>
    </template>
  </WorkspaceLayout>
</template>
