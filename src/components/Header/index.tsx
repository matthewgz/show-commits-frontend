import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: 16,
}))

const Header = () => {
  return (
    <header>
      <Container>
        <Typography align="center" variant="h4" fontWeight={600} color="white">
          Show Commits
        </Typography>
      </Container>
    </header>
  )
}

export default Header
