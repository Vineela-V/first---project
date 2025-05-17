import React from 'react';
import { Container, Typography } from '@mui/material';
import Cart from './features/cart/Cart';

function App() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>My MUI + Redux App</Typography>
      <Cart />
    </Container>
  );
}

export default App;
