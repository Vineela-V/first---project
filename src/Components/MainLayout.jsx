import {Drawer,List,ListItem,ListItemText,BottomNavigation,BottomNavigationAction,Box,Paper} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Reports from '../pages/Reports';

function MainLayout() {
  const [drawerOpen] = useState(true);
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const navigate = useNavigate();

  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    if (newValue === 0) navigate('/');
    if (newValue === 1) navigate('/profile');
    if (newValue === 2) navigate('/settings');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={drawerOpen}>
        <List>
          <ListItem button onClick={() => navigate('/')}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => navigate('/reports')}>
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Box>

      <Paper
        sx={{ position: 'fixed', bottom: 0, left: drawerOpen ? 240 : 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation value={bottomNavValue} onChange={handleBottomNavChange}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default MainLayout;
