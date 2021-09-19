import { memo } from 'react'

import { Avatar as MuiAvatar, Chip, Link } from '@mui/material'

import { Author } from 'utils/types'

interface Props {
  author: Author
}

const Avatar = memo(({ author }: Props) => {
  return (
    <Link
      href={author.htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
    >
      <Chip
        avatar={<MuiAvatar alt={author.name} src={author.avatarUrl} />}
        label={author.name}
        variant="outlined"
        sx={{ cursor: 'pointer' }}
      />
    </Link>
  )
})

Avatar.displayName = 'Avatar'

export default Avatar
