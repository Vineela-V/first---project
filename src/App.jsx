import React from 'react';
import Example from './Example';
import  { BasicBox, PageLayout, CardLikeBox, MUIBasicsDemo } from './Basics';
import MuiDemo from './Basics';
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Stack, Grid, Paper, Box, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export function Home() {
    return (
        <Stack spacing={4} sx={{ mt: 4, px: 2 }}>
            <BasicBox />
            <PageLayout />
            <CardLikeBox />
            <MUIBasicsDemo />
            <MuiDemo />
            <Example />

            <Typography variant="h5">Stack + Grid + Flexbox Layout</Typography>

            <Stack direction="row" spacing={2}>
                <Button variant="contained">One</Button>
                <Button variant="contained">Two</Button>
                <Button variant="contained">Three</Button>
            </Stack>

            <Grid container spacing={2}>
                {[1, 2, 3].map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item}>
                        <Paper sx={{ p: 2 }}>Grid Item {item}</Paper>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                bgcolor: 'grey.100'
            }}>
                <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, borderRadius: 1 }}>Box 1</Box>
                <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 2, borderRadius: 1 }}>Box 2</Box>
                <Box sx={{ bgcolor: 'error.main', color: 'white', p: 2, borderRadius: 1 }}>Box 3</Box>
            </Box>
        </Stack>
    );
}

function Profile() {
    return <Typography variant="h4" sx={{ mt: 4, px: 2 }}>My Profile Page</Typography>;
}

function Courses() {
    return <Typography variant="h4" sx={{ mt: 4, px: 2 }}>Courses Page</Typography>;
}

export default function App() {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(!open);
    }
    function handleClose() {
        setOpen(false);
    }

    return (
        <Router>
            <Button onClick={handleOpen} variant='outlined' color='success' sx={{ m: 2 }}>Click This </Button>
            <Drawer anchor={"left"} open={open} onClose={handleClose}>
                <MenuItem component={Link} to="/" onClick={handleClose}><h1>My Website</h1></MenuItem>
                <MenuItem component={Link} to="/profile" onClick={handleClose}>My Profile</MenuItem>
                <MenuItem>Saved Articles</MenuItem>
                <MenuItem>Saved Courses</MenuItem>
                <MenuItem component={Link} to="/courses" onClick={handleClose}>Courses</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Drawer>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </Router>
    );
}
