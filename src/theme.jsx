import { createTheme } from '@mui/material/styles';

const typography = {
  fontFamily: `'Poppins', 'Roboto', sans-serif`,
  h1: {
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f0f2f5',
    },
  },
  typography,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
    },
  },
  typography,
});
