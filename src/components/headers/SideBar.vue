<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import IconMenuClose from '../icons/IconMenuClose.vue'
import IconTodo from '../icons/IconTodo.vue'
import IconMembers from '../icons/IconMembers.vue'
import IconVote from '../icons/IconVote.vue'
import IconSetting from '../icons/IconSetting.vue'
import IconSwitch from '../icons/IconSwitch.vue'
import IconMenu from '../icons/IconMenu.vue'

const isToggle = ref(false)

const route = useRoute()
const account = route.params.account

const navData = [
  {
    id: 'folder-and-todo',
    title: 'Folders and Todos',
    icon: IconTodo,
    link: `/workspace/${account}/todo`,
  },
  {
    id: 'vote-and-result',
    title: 'Votes and Results',
    icon: IconVote,
    link: `/workspace/${account}/vote`,
  },
  {
    id: 'members',
    title: 'Members',
    icon: IconMembers,
    link: `/workspace/${account}/member`,
  },
  {
    id: 'setting',
    title: 'Settings',
    icon: IconSetting,
    link: `/workspace/${account}/setting`,
  },
]

const handleSidebarToggle = () => {
  isToggle.value = !isToggle.value
  console.log(isToggle.value)
}
</script>
<template>
  <header
    class="fixed z-[999] top-0 left-0 lg:w-[240px] h-full max-h-screen header-card flex flex-col justify-between"
    :class="isToggle ? 'w-[240px]' : 'w-[60px]'"
  >
    <div class="flex flex-col gap-[24px] lg:gap-[45px]">
      <button
        @click="handleSidebarToggle"
        class="h-[60px] w-full flex items-center lg:hidden cursor-pointer"
        :class="isToggle ? 'justify-end' : 'justify-center'"
      >
        <component :is="isToggle ? IconMenuClose : IconMenu" :size="isToggle ? '45' : '20'" />
      </button>
      <router-link
        to="/"
        class="h-[60px] text-xl font-bold w-full hidden lg:flex lg:justify-center lg:items-center lg:px-4"
      >
        WORKCONNECT
      </router-link>

      <nav class="">
        <router-link
          v-for="data in navData"
          :key="data.id"
          :to="data.link"
          :title="data.title"
          class="h-[60px] w-full flex items-center lg:justify-start lg:gap-2.5 lg:px-4 hover:bg-action-background/30"
          :class="isToggle ? 'flex justify-start px-4' : 'flex justify-center'"
        >
          <component :is="data.icon" size="30" class="w-[60px]" />
          <div class="lg:block text-lg" :class="isToggle ? 'block' : 'hidden'">
            {{ data.title }}
          </div>
        </router-link>
      </nav>
    </div>

    <router-link
      to="/dashboard/:userId"
      title="Switch Workspace"
      class="h-[60px] w-full flex items-center lg:justify-start lg:gap-2.5 lg:px-4 hover:bg-action-background/30"
      :class="isToggle ? 'flex justify-start px-4' : 'flex justify-center'"
    >
      <component :is="IconSwitch" size="30" class="w-[60px]" />
      <div class="lg:block text-lg" :class="isToggle ? 'block' : 'hidden'">Switch Workspace</div>
    </router-link>
  </header>
</template>
