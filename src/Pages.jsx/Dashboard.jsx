import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function Dashboard() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        <Typography>
          Welcome to the dashboard! Here's where you can view key information, summaries, or quick stats.
        </Typography>
      </Paper>
    </Box>
  );
}
