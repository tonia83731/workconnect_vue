import IconFolder from './IconFolder.vue'
import IconFolderOpen from './IconFolderOpen.vue'
import IconLogout from './IconLogout.vue'
import IconMembers from './IconMembers.vue'
import IconMenu from './IconMenu.vue'
import IconMoon from './IconMoon.vue'
import IconMore from './IconMore.vue'
import IconPinned from './IconPinned.vue'
import IconPinnedOutline from './IconPinnedOutline.vue'
import IconPlus from './IconPlus.vue'
import IconSetting from './IconSetting.vue'
import IconSunSolid from './IconSunSolid.vue'
import IconSwitch from './IconSwitch.vue'
import IconTodo from './IconTodo.vue'
import IconUser from './IconUser.vue'
import IconVote from './IconVote.vue'
import IconX from './IconX.vue'

export const IconTypes = {
  folder: IconFolder,
  folderOpen: IconFolderOpen,
  logout: IconLogout,
  members: IconMembers,
  menu: IconMenu,
  moon: IconMoon,
  more: IconMore,
  pinned: IconPinned,
  pinnedOutline: IconPinnedOutline,
  plus: IconPlus,
  setting: IconSetting,
  sunSolid: IconSunSolid,
  switch: IconSwitch,
  todo: IconTodo,
  user: IconUser,
  vote: IconVote,
  corss: IconX,
}

export type IconType = keyof typeof IconTypes
