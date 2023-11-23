/** @format */

import React from 'react';
import Divider from '@mui/material/Divider';
import Elipse from '../../assets/contact/Ellipse 2.png';
import Elipse2 from '../../assets/contact/Ellipse 1.png';
import { Stack, Button, Typography, Box } from '@mui/material';

import classes from './checkout.module.css';
// import AlertDialogSlide from "../Modals/Modal";

export default function Billing({ register, control, handleSubmit, formState }) {
  // handling errors
  const { errors } = formState;

  return (
    <Box>
      <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '36px',
            flex: '1',
          }}
        >
          Product
        </Typography>
        <Typography
          sx={{
            fontSize: ' 24px',
            fontWeight: '500',
            lineHeight: '36px',
            flex: '1',
          }}
        >
          Subtotal
        </Typography>
      </div>

      <div className='item' style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
        <p style={{ flex: '1' }}>
          {' '}
          <span
            style={{
              color: '#9F9F9F',
            }}
          >
            Asgaard{' '}
          </span>{' '}
          x 1
        </p>
        <Typography
          sx={{
            fontWeight: '300',
            FontSize: '16px',
            lineHeight: '24px',
            flex: '1',
          }}
        >
          Rs. 250,000.00
        </Typography>
      </div>

      <div className='item' style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            flex: '1',
            lineHeight: '24px',
          }}
        >
          Subtotal
        </Typography>
        <Typography
          sx={{
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '24px',
            flex: '1',
          }}
        >
          Rs. 250,000.00
        </Typography>
      </div>

      <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            flex: '1',
          }}
        >
          Total
        </Typography>
        <Typography
          sx={{
            color: '#B88E2F',
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '36px',
            flex: '1',
            // textAlign:"left"
          }}
        >
          Rs. 250,000.00
        </Typography>
      </div>

      <Divider variant='middle' />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          marginBottom: '10px',
          marginTop: '20px',
        }}
      >
        <img
          src={Elipse}
          alt='logo'
          style={{
            width: '18px',
            height: '18px',
          }}
        />
        <Typography
          variant='h4'
          style={{
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
          }}
        >
          Direct Bank Transfer
        </Typography>
      </div>

      <div style={{ color: '#9F9F9F' }}>
        <Typography variant='body-2'>
          {' '}
          Make your payment directly into our bank account. Please use <br />
          your Order ID as payment reference. Your order will not be <br />
          shipped until the funds have cleared in our account.
        </Typography>
      </div>
      <div style={{ color: '#9F9F9F', fontSize: '16px', fontWeight: '400', lineHeight: ' 24px' }}>
        <input
          {...register('paymentMode', {
            required: 'Select a payment mode',
          })}
          type='radio'
          name='paymentMode'
          value='direct-bank-transfer'
          id='field-radio'
          className={classes.input}
        />{' '}
        Direct Bank Transfer
        <br />
        {/* <label htmlFor="field-sun"> */}
        <input
          {...register('paymentMode', {
            required: 'Select a payment mode',
          })}
          type='radio'
          name='paymentMode'
          value='cashondelivery'
          id='field-radio'
        />{' '}
        Cash On Delivery
        <br />
        <Typography variant='body-3' sx={{ color: 'red' }} mb={2}>
          {errors.paymentMode?.message}
        </Typography>
      </div>

      <div>
        <Typography variant='body-2'>
          Your personal data will be used to support your experience <br />
          throughout this website, to manage access to your account and for other purposes described
          in our <b>privacy policy.</b>
        </Typography>
      </div>

      <Stack
        direction='row'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Button
          type='submit'
          sx={{
            color: 'black',
            width: '318px',
            height: '64px',
            borderRadius: '15px',
            border: '1px solid black',
          }}
        >
          Place Order
        </Button>
      </Stack>
    </Box>
  );
}
