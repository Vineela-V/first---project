import { Dialog, DialogTitle, DialogContent, DialogActions,Button } from "@mui/material";
import { Snackbar, Button} from '@mui/material';
import { Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";

export function Example() {
  const [ open, setOpen] = useState(false);
  return (
    <>
    <Button variant="contained" onClick={() => setOpen(true)}>open Dialog</Button>
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>Are you sure want to delete this item?</DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancle</Button>
        <Button onClick={() => {alert("Deleted"); setOpen(false); }} color="error">Delete</Button>
      </DialogActions>
    </Dialog>
    <Button variant="outlined" onClick={() => setOpen(true)}>Show Snackbar</Button>
    <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message="Saved successfully."/>
    <Tooltip title="More Info" arrow>
      <IconButton>
        <InfoIcon />
      </IconButton>
    </Tooltip>
    </>
  );
}