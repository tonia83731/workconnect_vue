export interface User {
  _id: string
  name: string
  account: string
  email: string
  password: string
  mode: 'LIGHT' | 'DARK'
  language: 'EN' | 'ZHTW'
  createdAt: Date
  updatedAt: Date
}

export interface Workspace {
  _id: string
  title: string
  account: string // UNIQUE: true
  social: {
    url: string
    media: 'TEAMS' | 'DISCORD' | 'SLACK'
  }
  createdAt: Date // timestamp
  updatedAt: Date // timestamp
  isDeleted: boolean
  deletedAt: Date
  members: WorkspaceMember[]
}

export interface WorkspaceActivity {
  _id: string
  workspaceId: string
  actorId: string
  targetType: 'TODO' | 'FOLDER' | 'BUCKET' | 'VOTE'
  targetId: string
  action: string
  createdAt: Date
}

export interface WorkspaceMember {
  _id: string
  userId: string
  isAdmin: boolean // default: false
  isPending: boolean // default: true
}

export interface Bucket {
  _id: string
  workspaceId: string
  title: string
  isPinned: boolean
  createdAt: Date // timestamp
  updatedAt: Date // timestamp
  order: number
  isDeleted: boolean
  deletedAt: Date
}

export interface Folder {
  _id: string
  workspaceId: string
  bucketId: string
  title: string
  todoCount: number
  createdAt: Date
  updatedAt: Date
  order: number
  isDeleted: boolean
  deletedAt: Date
}

export interface Todo {
  _id: string
  workspaceId: string
  bucketId: string
  folderId: string
  title: string
  status: 'PENDING' | 'IN_PROGRESS' | 'AWAITING_APPROVAL' | 'DONE'
  assignTo: WorkspaceMember[] // max: 3 members
  deadline: Date
  tags: TodoTag[]
  checklists: TodoChecklist[]
  text: string
  files: {
    url: string
    name?: string
    size?: number
    mimeType?: string
  }[]
  isDeleted: boolean
  deletedAt: Date
}

export interface TodoTag {
  _id: string
  workspaceId: string
  title: string
  color: string // e.g. #000000
}

export interface TodoChecklist {
  _id: string
  workspaceId: string
  todoId: string
  title: string
  isChecked: boolean
  createdAt: Date
  updatedAt: Date
}

export interface WorkspaceVote {
  _id: string
  workspaceId: string
  title: string
  description: string
  createdBy: string // WorkspaceMember._id or userId
  status: 'OPEN' | 'CLOSED' | 'CANCELLED'
  options: {
    _id: string
    label: string
  }[]
  expiresAt: Date
  createdAt: Date
  updatedAt: Date
}

export interface WorkspaceVoteRule {
  requireUnanimous: boolean
  minApprovalPercentage?: number // e.g. 0.5
  excludeCreators?: boolean
}

export interface WorkspaceVoteRecord {
  _id: string
  workspaceId: string
  voteId: string
  memberId: string
  optionId: string
  voteAt: Date
}
