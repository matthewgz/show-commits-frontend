import { Avatar as MuiAvatar, Chip } from '@mui/material'

import { Author } from 'utils/types'

interface Props {
  author: Author
}

const Avatar = ({ author }: Props) => {
  return (
    <Chip
      avatar={<MuiAvatar alt={author.name} src={author.avatarUrl} />}
      label={author.name}
      variant="outlined"
    />
  )
}

export default Avatar
