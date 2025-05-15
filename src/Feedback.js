import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Tooltip
} from '@mui/material';
import { useState } from 'react';

export default function FeedbackExample() {
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleConfirm = () => {
    setOpenDialog(false);
    setSnackbarOpen(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Tooltip title="Click to open a dialog">
        <Button variant="contained" onClick={handleOpenDialog}>
          Show Dialog
        </Button>
      </Tooltip>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Hello 👋</DialogTitle>
        <DialogContent>This is a basic dialog example.</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleConfirm} variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        message="You clicked OK!"
        onClose={() => setSnackbarOpen(false)}
      />
    </div>
  );
}
