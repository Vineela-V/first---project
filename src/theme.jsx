// theme.js
import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#ff0000' }, 
    secondary: { main: '#0000ff' }, 
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});
