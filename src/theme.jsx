import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00695f',
    },
    secondary: {
      main: '#f57c00',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
          },
          '& .MuiInputLabel-root': {
            color: '#00695f',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          marginBottom: '16px',
        },
        body1: {
          fontSize: '1rem',
        },
      },
    },
  },
});

export default theme;
