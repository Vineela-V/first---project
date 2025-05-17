import React from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from '../Components/ProductCard';

const products = [
  { id: 1, name: 'Mango', price: 5, image: '/assets/mango.jpg' },
  { id: 2, name: 'Banana', price: 2, image: '/assets/banana.jpg' },
];

const Products = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
