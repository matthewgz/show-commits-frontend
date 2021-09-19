export interface Repository {
  name: string
}

export interface Author {
  name: string
  email: string
  avatarUrl: string
}

export interface Commit {
  author: Author
  htmlUrl: string
  message: string
  date: string
  sha: string
}
