import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from './cartSlice';
import {Typography, Card, CardContent, CardActions, Button, List, ListItem, ListItemText, Divider} from '@mui/material';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="body1">No items in cart.</Typography>
      ) : (
        <Card>
          <CardContent>
            <List>
              {cart.map(item => (
                <React.Fragment key={item.id}>
                  <ListItem>
                    <ListItemText
                      primary={`${item.name} x ${item.quantity}`}
                      secondary={`$${item.price * item.quantity}`}
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </Button>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              Total: ${total}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default Cart;
