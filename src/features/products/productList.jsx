import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import {Card,CardContent,CardActions,Typography,Button,Grid,} from '@mui/material';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="text.secondary">${product.price}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
