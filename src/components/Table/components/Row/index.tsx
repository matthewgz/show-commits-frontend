import { memo } from 'react'

import { TableCell, TableRow, Button } from '@mui/material'

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
        {row.author.name}
      </TableCell>
      <TableCell style={{ width: 160 }} align="center">
        <Button variant="contained" color="primary">
          View
        </Button>
      </TableCell>
    </TableRow>
  )
})

Row.displayName = 'Row'

export default Row
