import { useCallback, Children, Dispatch, SetStateAction, memo } from 'react'

import {
  ToggleButtonGroup,
  ToggleButton,
  Box,
  CircularProgress,
} from '@mui/material'

import { Repository } from 'utils/types'

interface Props {
  repositories: Repository[]
  value: string
  setValue: Dispatch<SetStateAction<string>>
  loading: boolean
}

const ChooseRepository = memo(
  ({ repositories, value, setValue, loading }: Props) => {
    const handleChange = useCallback(
      (_: React.MouseEvent<HTMLElement>, newValue: string) => {
        if (newValue) setValue(newValue)
      },
      [setValue],
    )

    const renderToogleButton = useCallback(
      (repository: Repository) => (
        <ToggleButton value={repository.name}>
          {repository.label}
          {loading && value === repository.name ? (
            <CircularProgress size={16} sx={{ marginLeft: 1 }} />
          ) : null}
        </ToggleButton>
      ),
      [loading, value],
    )

    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <ToggleButtonGroup
          color="primary"
          value={value}
          exclusive
          onChange={handleChange}
        >
          {Children.toArray(repositories.map(renderToogleButton))}
        </ToggleButtonGroup>
      </Box>
    )
  },
)

ChooseRepository.displayName = 'ChooseRepository'

export default ChooseRepository
