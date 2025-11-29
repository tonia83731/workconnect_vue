<script setup lang="ts">
import { computed, ref } from 'vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import IconFolder from '@/components/icons/IconFolder.vue'
import WorkspaceLayout from '@/components/layout/WorkspaceLayout.vue'
import ButtonDefault from '@/components/ButtonDefault.vue'
import IconPinned from '@/components/icons/IconPinned.vue'
import IconPinnedOutline from '@/components/icons/IconPinnedOutline.vue'
import ModalLayout from '@/components/layout/ModalLayout.vue'

interface IFolder {
  _id: string
  title: string
  workspaceId: string
  isPinned: boolean
  todos?: ITodo[]
}
interface ITodo {
  _id: string
  title: string
  workspaceId: string
  workfolderId: string
  tagId: string | null
  status: 'pending' | 'processing' | 'completed'
  note: string | null
  deadline: Date | null
  checklists: {
    isChecked: boolean
    text: string
  }[]
  assignments: {
    userId: string
  }[]
  files: {
    url: string
    filename: string
    type: string
  }[]
  order: number
  createdAt: Date
  updatedAt: Date
}
const dummyData: IFolder[] = [
  {
    _id: '67470a1f5f9b1c001fa00001',
    title: 'Frontend Tasks',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: false,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00011',
        title: 'Implement navbar',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00001',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00012',
        title: 'Refactor components',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00001',
        tagId: null,
        status: 'processing',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00013',
        title: 'Fix SSR hydration issues',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00001',
        tagId: null,
        status: 'completed',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    _id: '67470a1f5f9b1c001fa00002',
    title: 'Backend APIs',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: true,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00021',
        title: 'Auth token refresh',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00002',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00022',
        title: 'User profile update API',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00002',
        tagId: null,
        status: 'processing',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00023',
        title: 'File storage endpoint',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00002',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    _id: '67470a1f5f9b1c001fa00003',
    title: 'UI/UX Fixes',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: false,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00031',
        title: 'Spacing adjustment',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00003',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00032',
        title: 'Modal animation update',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00003',
        tagId: null,
        status: 'completed',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00033',
        title: 'Improve dark mode contrast',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00003',
        tagId: null,
        status: 'processing',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    _id: '67470a1f5f9b1c001fa00004',
    title: 'DevOps Tasks',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: false,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00041',
        title: 'CI pipeline refactor',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00004',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00042',
        title: 'Setup staging server',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00004',
        tagId: null,
        status: 'processing',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00043',
        title: 'Monitor memory usage',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00004',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    _id: '67470a1f5f9b1c001fa00005',
    title: 'Marketing',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: false,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00051',
        title: 'Landing page copy',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00005',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00052',
        title: 'Email campaign v2',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00005',
        tagId: null,
        status: 'processing',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00053',
        title: 'A/B test headlines',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00005',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    _id: '67470a1f5f9b1c001fa00006',
    title: 'Research',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: false,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00061',
        title: 'Evaluate UI libs',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00006',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00062',
        title: 'Compare DB choices',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00006',
        tagId: null,
        status: 'completed',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00063',
        title: 'Explore AI features',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00006',
        tagId: null,
        status: 'processing',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    _id: '67470a1f5f9b1c001fa00007',
    title: 'Design System',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: false,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00071',
        title: 'Button variants',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00007',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00072',
        title: 'Typography scale',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00007',
        tagId: null,
        status: 'processing',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00073',
        title: 'Color palette',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00007',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    _id: '67470a1f5f9b1c001fa00008',
    title: 'Documentation',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: false,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00081',
        title: 'API docs',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00008',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00082',
        title: 'Component guide',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00008',
        tagId: null,
        status: 'processing',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00083',
        title: 'Setup instructions',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00008',
        tagId: null,
        status: 'completed',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    _id: '67470a1f5f9b1c001fa00009',
    title: 'Testing',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: false,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00091',
        title: 'Unit tests',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00009',
        tagId: null,
        status: 'processing',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00092',
        title: 'E2E flows',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00009',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00093',
        title: 'Performance test',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00009',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  {
    _id: '67470a1f5f9b1c001fa00010',
    title: 'Personal Tasks',
    workspaceId: '67470a1f5f9b1c001fa10001',
    isPinned: false,
    todos: [
      {
        _id: '67470b1f5f9b1c001fa00101',
        title: 'Daily planning',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00010',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00102',
        title: 'Buy groceries',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00010',
        tagId: null,
        status: 'completed',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: '67470b1f5f9b1c001fa00103',
        title: 'Workout session',
        workspaceId: '67470a1f5f9b1c001fa10001',
        workfolderId: '67470a1f5f9b1c001fa00010',
        tagId: null,
        status: 'pending',
        note: '',
        deadline: null,
        checklists: [],
        assignments: [],
        files: [],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
]

const hasMoreData = ref(true)
const createToggle = ref<"folder" | "todo" | null>(null)

const itemsPerPage = 6
const currPage = ref(1)
const startIdx = computed(() => (currPage.value - 1) * itemsPerPage)
const endIdx = computed(() => startIdx.value + itemsPerPage)

dummyData.sort((a, b) => a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1)
const showedFolder = ref<IFolder[]>(dummyData.slice(0, 6))
const selectedFolder = ref<IFolder | null>(null)
const handleFolderShowedMore = () => {
  currPage.value += 1

  const addData = dummyData.slice(startIdx.value, endIdx.value)
  showedFolder.value = [...showedFolder.value, ...addData]

  if (showedFolder.value.length === dummyData.length) hasMoreData.value = false
}
const handleFolderSelect = (f: IFolder) => {
  selectedFolder.value = f
}

const handleFolderPinned = (folderId: string, currPinned: boolean) => {
  dummyData.forEach((f) => {
    if (f._id === folderId) {
      f.isPinned = !currPinned
    }
  })

  dummyData.sort((a, b) => a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1)

  showedFolder.value = dummyData.slice(0, endIdx.value)
}

const handleCreateFolderToggle = (type?: "folder" | "todo") => {
  if (!type) {
    createToggle.value = null
    return
  }
  createToggle.value = type
}

const handleCreateData = () => {
  // checked created type

  // formated data

  // untoggle modal
  createToggle.value = null
}
</script>
<template>
  <WorkspaceLayout :title="'Folders and Todos'">
    <template #workspace_layout>
      <div class="flex flex-col gap-8">
        <!-- Folders -->
        <div class="flex flex-col gap-4">
          <!-- title -->
          <div class="flex justify-between items-center">
            <h4 class="text-2xl">Folders</h4>
            <button-default
              shape="default-sm"
              color="primary"
              class="cursor-pointer rounded-md flex justify-center items-center gap-2"
              :onClick="() => handleCreateFolderToggle('folder')"
              >
              <template #button>
                <IconPlus />
                <div class="hidden md:block">Add Folder</div>
              </template>
            </button-default>
          </div>
          <div class="flex flex-col gap-2">
            <!-- content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1.5 gap-y-2">
              <button
                v-for="f in showedFolder"
                :key="f._id"
                class="border pl-4 pr-2 py-1.5 rounded-md"
                :class="selectedFolder && selectedFolder._id === f._id ? 'border-action-background' : 'border-line'"
                @click="() => handleFolderSelect(f)"
                >
                <div class="flex justify-between items-center gap-2">
                  <div class="flex justify-center items-center gap-2">
                    <IconFolder class="opacity-60" size="20" />
                    <p class="">{{ f.title }}</p>
                  </div>
                  <button-default
                    shape="underline-sm"
                    color="text-default"
                    :class="!f.isPinned ? 'opacity-60' : ''"
                    @click="(e) => {
                      e?.stopPropagation();
                      handleFolderPinned(f._id, f.isPinned)
                    }"
                  >
                    <template #button>
                      <component size="14" :is="f.isPinned ? IconPinned : IconPinnedOutline" />
                    </template>
                  </button-default>
                </div>
              </button>
            </div>
            <button-default
              :onClick="() => handleFolderShowedMore()"
              shape="underline-sm"
              color="text-default"
              class="w-full text-center"
              v-if="hasMoreData"
            >
              <template #button> Showed more data... </template>
            </button-default>
          </div>
        </div>
        <!-- Todos -->
        <div class="flex flex-col gap-4">
          <!-- title -->
          <div class="flex justify-between items-center">
            <h4 class="text-2xl">Todos</h4>
            <button-default
              shape="default-sm"
              color="primary"
              class="cursor-pointer rounded-md flex justify-center items-center gap-2"
              :onClick="() => handleCreateFolderToggle('todo')"
              >
              <template #button>
                <IconPlus />
                <div class="hidden md:block">Add Todo</div>
              </template>
            </button-default>
          </div>
          <!-- content -->
          <div v-if="selectedFolder" class="flex flex-col gap-1.5">
            <div v-for="t in selectedFolder?.todos" :key="t._id" class="">
              <h5 class="">{{ t.title }}</h5>
            </div>

          </div>
          <div v-else class="text-foreground-disabled text-center">
            No folder selected.
          </div>
        </div>
      </div>
    </template>
  </WorkspaceLayout>
  <ModalLayout :title="createToggle === 'folder' ? 'Add Folder' : 'Add Todo'" :isToggle="createToggle" :onClose="() => handleCreateFolderToggle()">
    <template #modal_content>
      hello world
    </template>
    <template #modal_button>
      <div class="flex justify-end items-center gap-2">
        <button-default
          shape="default-sm"
          color="secondary"
          class="cursor-pointer rounded-md flex justify-center items-center gap-2"
          :onClick="() => handleCreateFolderToggle()"
          >
          <template #button>
            <div>Cancel</div>
          </template>
        </button-default>
        <button-default
          shape="default-sm"
          color="primary"
          class="cursor-pointer rounded-md flex justify-center  items-center gap-2"
          :onClick="handleCreateData"
          >
          <template #button>
            <div>Add</div>
          </template>
        </button-default>
      </div>
    </template>
  </ModalLayout>
</template>
