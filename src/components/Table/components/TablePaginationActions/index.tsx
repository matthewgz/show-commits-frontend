import { memo, useCallback } from 'react'
import { useTheme } from '@mui/material/styles'

import { Box, IconButton } from '@mui/material'
import LastPageIcon from '@mui/icons-material/LastPage'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

interface Props {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void
}

const TablePaginationActions = memo(
  ({ count, page, rowsPerPage, onPageChange }: Props) => {
    const theme = useTheme()

    const handleFirstPageButtonClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, 0)
      },
      [onPageChange],
    )

    const handleBackButtonClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1)
      },
      [onPageChange, page],
    )

    const handleNextButtonClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1)
      },
      [onPageChange, page],
    )

    const handleLastPageButtonClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
      },
      [count, onPageChange, rowsPerPage],
    )

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    )
  },
)

TablePaginationActions.displayName = 'TablePaginationActions'

export default TablePaginationActions
