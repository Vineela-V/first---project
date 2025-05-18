import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MyButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: '#fff',
  padding: theme.spacing(1.5, 4),
  borderRadius: 12,
  textTransform: 'none',
  fontWeight: '600',
  boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: '0 5px 8px rgba(0,0,0,0.3)',
  },
}));

export default function CustomButton(props) {
  return <MyButton {...props} />;
}
