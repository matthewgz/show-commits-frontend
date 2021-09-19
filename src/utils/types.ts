export interface Repository {
  name: string
  label: string
}

export interface Author {
  name: string
  email: string
  avatarUrl: string
  htmlUrl: string
}

export interface Commit {
  author: Author
  htmlUrl: string
  message: string
  date: string
  sha: string
}
