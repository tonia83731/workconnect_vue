import type { Todo } from '@/types/todo'
import { dummyBucket } from './dummyBucket'
import { dummyUser } from './dummyUser'

export const dummyFolder = dummyBucket.flatMap((bucket) => [
  {
    _id: `${bucket._id}-f1`,
    workspaceId: bucket.workspaceId,
    bucketId: bucket._id,
    title: 'UI Enhancements',
    order: 1,
    todoCount: 0,
    isDeleted: false,
    deletedAt: null,
  },
  {
    _id: `${bucket._id}-f2`,
    workspaceId: bucket.workspaceId,
    bucketId: bucket._id,
    title: 'API Improvements',
    order: 2,
    todoCount: 0,
    isDeleted: false,
    deletedAt: null,
  },
  {
    _id: `${bucket._id}-f3`,
    workspaceId: bucket.workspaceId,
    bucketId: bucket._id,
    title: 'Bug Fixes',
    order: 3,
    todoCount: 0,
    isDeleted: false,
    deletedAt: null,
  },
  {
    _id: `${bucket._id}-f4`,
    workspaceId: bucket.workspaceId,
    bucketId: bucket._id,
    title: 'Documentation',
    order: 4,
    todoCount: 0,
    isDeleted: false,
    deletedAt: null,
  },
])

export const dummyTodo = dummyFolder.flatMap((folder) => {
  const count = Math.floor(Math.random() * 3) + 3 // 3–5
  return Array.from({ length: count }).map((_, i) => ({
    _id: `${folder._id}-t${crypto.randomUUID().slice(0, 6)}`,
    workspaceId: folder.workspaceId,
    bucketId: folder.bucketId,
    folderId: folder._id,
    title: [
      'Refine user onboarding flow',
      'Improve error handling',
      'Optimize performance bottlenecks',
      'Add validation for edge cases',
      'Review accessibility compliance',
    ][i % 5],
    status: ['PENDING', 'IN_PROGRESS', 'DONE'][i % 3] as Todo['status'],
    assignTo: [dummyUser[i % dummyUser.length]!._id],
    deadline: new Date('2025-02-15'),
    tags: ['UX', 'Backend', 'Docs'].slice(0, (i % 3) + 1),
    checklists: [],
    text: 'Ensure implementation aligns with project requirements and team agreement.',
    files: [],
    isDeleted: false,
    deletedAt: null,
  }))
})
