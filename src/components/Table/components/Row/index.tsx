import { memo } from 'react'

import { TableCell, TableRow, Button, Link } from '@mui/material'

import Avatar from 'components/Avatar'
import { Commit } from 'utils/types'

interface Props {
  row: Commit
}

const Row = memo(({ row }: Props) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {row.message}
      </TableCell>
      <TableCell style={{ width: 160 }} align="center">
        <Avatar author={row.author} />
      </TableCell>
      <TableCell style={{ width: 160 }} align="center">
        <Link
          href={row.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <Button variant="contained" color="primary">
            View
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  )
})

Row.displayName = 'Row'

export default Row
