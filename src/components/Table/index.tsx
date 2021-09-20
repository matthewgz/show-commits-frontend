import { Children, Dispatch, SetStateAction, useCallback, memo } from 'react'

import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination,
} from '@mui/material'

import { Commit } from 'utils/types'
import { ROWS_PER_PAGE } from 'utils/constants'
import TablePaginationActions from './components/TablePaginationActions'
import Row from './components/Row'

interface Props {
  commits: Commit[]
  setPage: Dispatch<SetStateAction<number>>
  setLimit: Dispatch<SetStateAction<number>>
  page: number
  limit: number
}

const Table = memo(({ commits, setPage, setLimit, page, limit }: Props) => {
  const handleChangePage = useCallback(
    (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage + 1)
    },
    [setPage],
  )

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setLimit(parseInt(event.target.value, 10))
      setPage(1)
    },
    [setLimit, setPage],
  )

  const renderRow = useCallback(
    (commit: Commit) => <Row key={commit.sha} row={commit} />,
    [],
  )

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 1000,
        marginInline: 'auto',
        marginY: 4,
      }}
    >
      <MuiTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Message</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Children.toArray(
            (limit > 0
              ? commits.slice((page - 1) * limit, (page - 1) * limit + limit)
              : commits
            ).map(renderRow),
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={ROWS_PER_PAGE}
              colSpan={3}
              count={commits.length}
              rowsPerPage={limit}
              page={page - 1}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </MuiTable>
    </TableContainer>
  )
})

Table.displayName = 'Table'

export default Table
