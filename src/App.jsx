// App.jsx
import React, { useState } from 'react';
import {ThemeProvider,CssBaseline,AppBar,Toolbar,Typography,IconButton,Drawer,List,ListItem,ListItemText,Box,Button,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { appTheme } from './theme';

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {['Home', 'About', 'Contact'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Welcome To my Page!</Typography>
        <Typography>This is the example of applying themeprovider including layout, navbar , drawer.</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
