import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';

// const StyledButton =styled(Button)({
//   color: 'black',
//     width: '318px',
//     height: '64px',
//     borderRadius: '15px',
//     border: '1px solid black',
// })

const Modal = ({ open, handleClose, type, handleSubmit }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to
          {` ${type ? type : ''}`}?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          No
        </Button>
        <Button
          // onClick={handleSubmit}
          handleSubmit={handleSubmit}
          sx={{ color: 'blue' }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const ModalWithConfirmation = ({ handleSubmit, node, type, register, control, formState }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const handleYes = () => {
  //   // Handle 'Yes' action
  //   console.log('User clicked Yes');
  //   setOpen(false); // Close the modal
  // };
  return (
    <div>
      <Button onClick={handleOpen}>{type}</Button>

      <Modal type={type} open={open} handleClose={handleClose} onOk={handleSubmit} />
    </div>
  );
};
export default ModalWithConfirmation;
