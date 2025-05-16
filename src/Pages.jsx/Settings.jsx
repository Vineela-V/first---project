import React from 'react';
import { Typography, Switch, FormControlLabel, Box, Divider, TextField, Button } from '@mui/material';

export default function Settings() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Notifications
      </Typography>
      <FormControlLabel control={<Switch defaultChecked />} label="Email Alerts" />
      <FormControlLabel control={<Switch />} label="Push Notifications" />

      <Divider sx={{ my: 4 }} />
      <Typography variant="h6">
        Update Profile
      </Typography>
      <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
        <TextField label="Username" defaultValue="vineela _v" />
        <TextField label="Email" type="email" defaultValue="vineelav1123@.com" />
        <TextField label="Phone" type="tel" />
        <Button variant="contained">Save Changes</Button>
      </Box>
    </Box>
  );
}
