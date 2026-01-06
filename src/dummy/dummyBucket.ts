import { dummyWorkspace } from './dummyWorkspace'

export const dummyBucket = [
  // Workspace 1
  {
    _id: 'b101',
    workspaceId: dummyWorkspace[0]?._id,
    title: 'Backlog',
    isPinned: true,
    order: 1,
    isDeleted: false,
    deletedAt: null,
  },
  {
    _id: 'b102',
    workspaceId: dummyWorkspace[0]?._id,
    title: 'In Progress',
    isPinned: false,
    order: 2,
    isDeleted: false,
    deletedAt: null,
  },
  {
    _id: 'b103',
    workspaceId: dummyWorkspace[0]?._id,
    title: 'Completed',
    isPinned: false,
    order: 3,
    isDeleted: false,
    deletedAt: null,
  },

  // Workspace 2
  {
    _id: 'b201',
    workspaceId: dummyWorkspace[1]?._id,
    title: 'Ideas',
    isPinned: true,
    order: 1,
    isDeleted: false,
    deletedAt: null,
  },
  {
    _id: 'b202',
    workspaceId: dummyWorkspace[1]?._id,
    title: 'Development',
    isPinned: false,
    order: 2,
    isDeleted: false,
    deletedAt: null,
  },
  {
    _id: 'b203',
    workspaceId: dummyWorkspace[1]?._id,
    title: 'Released',
    isPinned: false,
    order: 3,
    isDeleted: false,
    deletedAt: null,
  },
]
