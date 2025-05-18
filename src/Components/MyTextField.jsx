import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const MyTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.palette.grey[700],
  },
  '& label.Mui-focused': {
    color: theme.palette.secondary.main,
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    '& fieldset': {
      borderColor: theme.palette.grey[400],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
      boxShadow: `0 0 8px 2px ${theme.palette.secondary.light}`,
    },
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.secondary.dark,
  },
}));

export default function CustomTextField(props) {
  return <MyTextField {...props} />;
}
