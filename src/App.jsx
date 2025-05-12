import React from 'react'
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

export default function App() {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(!open);
    }
    function handleClose() {
        setOpen(false);
    }
    return (
        <>
        <Button onClick={handleOpen} variant='outlined' color='success'>Click This </Button>
        <Drawer anchor={"left"} open={open} onClose={handleClose}>
            <MenuItem>
              <h1>My Website</h1>
            </MenuItem>
            <MenuItem>My Profile</MenuItem>
            <MenuItem>Saved Articles</MenuItem>
            <MenuItem>Saved Courses</MenuItem>
            <MenuItem>Courses</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Drawer>
        </>
    );
}