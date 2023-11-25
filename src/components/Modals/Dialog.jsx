import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

export default function FormDialog({ type, sx, label, register }) {
  const form = useForm({ mode: 'all' });
  const { handleSubmit } = form;
  const onSubmit = (data) => {
    console.log('form submitted', data);
    // Set a timeout and reload the page after the timeout
    setTimeout(() => {
      console.log('Reloading the page after a delay');
      window.location.reload();
    }, 2000);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button sx={sx} onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <DialogTitle>Submit {type} form?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to
              <br />
              {`${label ? label : ''}`}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>Agree</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
