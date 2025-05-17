import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProductList from './features/products/ProductList';
import Cart from './features/cart/Cart';

const App = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Redux Toolkit Shopping Cart
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <ProductList />
        </Grid>
        <Grid item xs={12} md={5}>
          <Cart />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;