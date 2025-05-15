import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {Box,Drawer,List,ListItem,BottomNavigation,BottomNavigationAction,Tabs,Tab,Paper} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import { useState } from 'react';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const navigate = useNavigate();
  const [bottomNavValue, setBottomNavValue] = useState(0);

  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/profile');
        break;
      case 2:
        navigate('/settings');
        break;
      case 3:
        navigate('/reports');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" sx={{ width: 200 }}>
        <List>
          <ListItem button onClick={() => navigate('/')}>Home</ListItem>
          <ListItem button onClick={() => navigate('/profile')}>Profile</ListItem>
          <ListItem button onClick={() => navigate('/settings')}>Settings</ListItem>
          <ListItem button onClick={() => navigate('/reports')}>Reports</ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 2, ml: '200px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Box>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 200,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation value={bottomNavValue} onChange={handleBottomNavChange}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
          <BottomNavigationAction label="Reports" icon={<ReportIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
function Home() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <h2>Home</h2>
      <Tabs value={tab} onChange={(e, v) => setTab(v)}>
        <Tab label="Feed" />
        <Tab label="Activity" />
      </Tabs>
      {tab === 0 && <p>This is the Feed section.</p>}
      {tab === 1 && <p>This is the Activity section.</p>}
    </>
  );
}

function Profile() {
  return <h2>Profile Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}

function Reports() {
  return <h2>Reports Page</h2>;
}

export default App;
