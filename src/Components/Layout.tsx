import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Drawer, Toolbar, Typography } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginLeft: drawerWidth,
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
  },
}));

const MyAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const MyDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <MyAppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My First App
          </Typography>
        </Toolbar>
      </MyAppBar>

      <MyDrawer variant="permanent" anchor="left">
        <Toolbar />
        <Box sx={{ overflow: 'auto', p: 2 }}>
          <Typography
            onClick={() => console.log('Sidebar Item 1 clicked')}
            sx={{ cursor: 'pointer', color: 'primary.main' }}
          >
            Sidebar Item 1
          </Typography>
          <Typography
            onClick={() => console.log('Sidebar Item 2 clicked')}
            sx={{ cursor: 'pointer', color: 'primary.main' }}
          >
            Sidebar Item 2
          </Typography>
          <Typography
            onClick={() => console.log('Sidebar Item 3 clicked')}
            sx={{ cursor: 'pointer', color: 'primary.main' }}
          >
            Sidebar Item 3
          </Typography>
        </Box>
      </MyDrawer>

      <Main>
        <Toolbar />
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
