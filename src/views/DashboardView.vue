<script setup lang="ts">
import dayjs from 'dayjs'
import IconMembers from '@/components/icons/IconMembers.vue'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import { dummyWorkspace } from '@/dummy/dummyWorkspace'
</script>
<template>
  <DashboardLayout>
    <template #dashboard_layout>
      <!-- <h1>This is Dashboard</h1> -->
      <div
        v-for="{ _id, title, account, members } in dummyWorkspace"
        :key="_id"
        class="bg-card-background text-foreground shadow-sm"
      >
        <div class="flex justify-between items-center gap-4">
          <div class="text-lg">{{ title }}</div>
          <div class="flex items-center gap-1">
            <IconMembers :size="20" />
            <div class="">{{ members.length }}</div>
          </div>
        </div>
        <p class="text-foreground-secondary text-sm"># {{ account }}</p>
        <!-- <p class="text-foreground-secondary text-sm">{{ dayjs(createdAt).format('YYYY-MM-DD') }}</p> -->
      </div>
    </template>
  </DashboardLayout>
</template>

<style></style>
