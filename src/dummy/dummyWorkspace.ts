import { dummyUser } from './dummyUser'

export const dummyWorkspace = [
  {
    _id: '65a10001aabbccddeeff0001',
    title: 'Product Design Sprint',
    account: 'product-design',
    social: {
      url: 'https://teams.microsoft.com/l/team/123',
      media: 'TEAMS',
    },
    createdAt: new Date('2025-01-05'),
    updatedAt: new Date('2025-01-22'),
    isDeleted: false,
    deletedAt: null,
    members: [
      { _id: 'm1', userId: dummyUser[0]?._id, isAdmin: true, isPending: false },
      { _id: 'm2', userId: dummyUser[1]?._id, isAdmin: false, isPending: false },
      { _id: 'm3', userId: dummyUser[2]?._id, isAdmin: false, isPending: false },
    ],
  },
  {
    _id: '65a10002ffeeddccbbaa0002',
    title: 'Engineering Roadmap 2025',
    account: 'engineering-roadmap',
    social: {
      url: 'https://discord.gg/engineering',
      media: 'DISCORD',
    },
    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-23'),
    isDeleted: false,
    deletedAt: null,
    members: [
      { _id: 'm4', userId: dummyUser[1]?._id, isAdmin: true, isPending: false },
      { _id: 'm5', userId: dummyUser[2]?._id, isAdmin: false, isPending: false },
      { _id: 'm6', userId: dummyUser[3]?._id, isAdmin: false, isPending: false },
    ],
  },
]
