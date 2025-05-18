import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.success.dark,
  },
}));

export default CustomButton;
