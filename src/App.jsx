import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { useState } from 'react';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [isDark, setIsDark] = useState(false);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div style={{ padding: '2rem' }}>
        <Button variant="contained" onClick={() => setIsDark(!isDark)}>
          Dark Theme
        </Button>
        <h1>Custom Font Heading</h1>
        <p>This is the Example of dark and light theme. .</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
