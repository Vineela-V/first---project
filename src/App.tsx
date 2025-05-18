import React from 'react';
import Layout from './components/Layout';
import CustomButton from './components/CustomButton';
import { Typography } from '@mui/material';

function App() {
  return (
    <Layout>
      <Typography variant="h4">
        Welcome!
      </Typography>
      <Typography paragraph>
        This is the main content area. Resize the window to test responsive behavior.
      </Typography>
      <CustomButton>Click Me</CustomButton>
    </Layout>
  );
}

export default App;