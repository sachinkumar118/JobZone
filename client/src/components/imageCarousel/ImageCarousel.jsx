import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Grid, Divider, Chip } from '@mui/material';
import {makeStyles} from '@mui/styles';
import "./ImageCarousel.css"

const useStyles = makeStyles({
  modalContent: {
    maxWidth: '80vw',
    maxHeight: '80vh',
    overflow: 'auto',
  },
});

const ImageCarousel = ({ images, open, setOpen}) => {
  const classes = useStyles();


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle>Images</DialogTitle>
        <DialogContent className={'carousel-wrapper'}>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageCarousel;
