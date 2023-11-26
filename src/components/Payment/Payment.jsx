import React from 'react';
import './Payment.css';
import { Typography, Grid, Box } from '@mui/material';

export default function PaymentPlan() {
  return (
    <Box className='payment-section'>
      <Grid container direction={{ xs: 'column', sm: 'column', md: 'row' }} className='payment-content' >
        <Grid item xs={12} md={4}  className='grid-item'>
          <Typography variant='h4' className='heading-text'>
            Free Delivery
          </Typography>
          <Typography className='paragraph-text'>
            For all orders over $50, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}  className='grid-item'>
          <Typography variant='h4' className='heading-text'>
            90 Days Return
          </Typography>
          <Typography className='paragraph-text'>
            If goods have problems, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}  className='grid-item'>
          <Typography variant='h4' className='heading-text'>
            Secure Payment
          </Typography>
          <Typography className='paragraph-text'>
            100% secure payment, consectetur adipiscing elit.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
