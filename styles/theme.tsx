import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B8EF2',
    },
    secondary: {
      main: '#38D0F2',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
