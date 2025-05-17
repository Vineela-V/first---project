import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
