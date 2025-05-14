import React from 'react';
import { ThemeProvider, CssBaseline, Button, TextField, Typography, Box } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4">Make a note here!</Typography>
        <TextField fullWidth label="Your Thoughts" variant="outlined" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
