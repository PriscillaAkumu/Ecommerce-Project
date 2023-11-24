import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { DevTool } from "@hookform/devtools"
import FormDialog from '../../Modals/Dialog';

// mui
import { TextField, Typography, Grid, Checkbox, Button, Stack, Box } from '@mui/material';

export default function ContactForm() {
  const form = useForm();

  const { register, control, handleSubmit, formState } = form;

  // handling form submission
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log('form submited', data);
  };

  // handling errors
  const { errors } = formState;

  console.log('working!');

  // to check authenication

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack>
            <Typography mb={2}>Your name</Typography>
            <TextField
              size='small'
              mb={2}
              type='text'
              id='username'
              placeholder='Abc'
              {...register('username', {
                required: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Enter your name',
                },
              })}
            />
            <Typography variant='body-3' sx={{ color: 'red' }} mb={2}>
              {errors.username?.message}
            </Typography>
          </Stack>

          <Stack>
            <Typography mb={2}>Email address</Typography>
            <TextField
              size='small'
              mb={2}
              type='email'
              id='email'
              placeholder='Abc@def.com'
              {...register('email', {
                required: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Enter your Email Address',
                },
              })}
            />
            <Typography variant='body-3' sx={{ color: 'red' }} mb={2}>
              {errors.email?.message}
            </Typography>
          </Stack>

          <Stack>
            <Typography mb={2}>Subject</Typography>
            <TextField
              size='small'
              mb={2}
              type='text'
              id='subject'
              placeholder='This is optional'
              {...register('subject')}
            />
          </Stack>

          <Stack>
            <Typography
              mb={2}
              sx={{
                fontSize: '16px',
                color: '#000',
              }}
            >
              Message
            </Typography>
            <TextField
              size='small'
              type='text'
              id='message'
              placeholder="Hi i'd like to ask about"
              {...register('message', {
                required: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: 'Enter your message',
                },
              })}
            />
            <Typography variant='body-3' sx={{ color: 'red' }} mb={2}>
              {errors.message?.message}
            </Typography>
          </Stack>

          <Stack direction='row'>
            <FormDialog
              type={'Contact'}
              label={'submit'}
              sx={{
                color: 'black',
                border: '1px solid black',
                marginTop: '13px',
                borderRadius: '15px',
                width: '237px',
                height: '48px',
                padding: '12px 89px',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                backgroundColor: 'white',
              }}
            />
          </Stack>
        </form>
      </Box>
    </>
  );
}
