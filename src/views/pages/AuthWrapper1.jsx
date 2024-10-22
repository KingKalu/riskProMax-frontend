// material-ui
import { styled } from '@mui/material/styles';

// project imports

// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper1 = styled('div')(({ theme }) => ({
  background: theme.palette.grey[100],
  minHeight: '100vh',
  position: 'relative',
  zIndex: 5
}));

export default AuthWrapper1;
