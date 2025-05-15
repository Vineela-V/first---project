import {Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,Snackbar,TextField,Tooltip,IconButton,Typography,} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

export default function EditProfile() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Vineela Valeti',
    email: 'vineelav2000@gmail.com',
  });

  const [editValues, setEditValues] = useState(profile);

  const handleOpen = () => {
    setEditValues(profile); 
    setDialogOpen(true);
  };

  const handleChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(editValues);
    setDialogOpen(false);
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">User Profile</Typography>
      <Typography>Name: {profile.name}</Typography>
      <Typography>Email: {profile.email}</Typography>

      <Tooltip title="Edit Profile" arrow>
        <IconButton onClick={handleOpen}>
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label="Name"
            name="name"
            value={editValues.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={editValues.email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Profile updated!"
      />
    </Box>
  );
}
