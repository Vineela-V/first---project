import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, fetchRandomNumber } from './counterSlice';

import { Button, Stack, Snackbar, Alert, Typography, CircularProgress } from '@mui/material';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Show snackbar when fetch is successful
  useEffect(() => {
    if (status === 'succeeded') {
      setOpenSnackbar(true);
    }
  }, [status]);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>Redux Toolkit + MUI Counter</Typography>
      <Typography variant="h5">Count: {count}</Typography>
      <Typography variant="body2" color="text.secondary">Status: {status}</Typography>

      <Stack spacing={2} direction="row" justifyContent="center" marginTop={2}>
        <Button variant="contained" onClick={() => dispatch(increment())}>Increment</Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button variant="outlined" onClick={() => dispatch(reset())}>Reset</Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(fetchRandomNumber())}
          disabled={status === 'loading'}
          endIcon={status === 'loading' ? <CircularProgress size={20} color="inherit" /> : null}
        >
          Set Random
        </Button>
      </Stack>

      {/* Snackbar for feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" variant="filled">
          Random number fetched and updated!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Counter;
