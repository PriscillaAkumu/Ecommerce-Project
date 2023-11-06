import React from 'react';
import { TextField, FormControl, FormLabel, Button, Stack } from "@mui/material";

const Login = () => {
  return (
  <React.Fragment>
<form autoComplete="off" >
<h2>Login Form</h2>
<Stack direction='column'>
    <FormLabel>Username</FormLabel>
    <TextField
    type='text'
    size='small'
    variant='outlined'
    fullWidth
    />
</Stack>
<Stack direction='column'>
    <FormLabel>Password</FormLabel>
    <TextField
    type='password'
    size='small'
    variant='outlined'
    fullWidth
    />
</Stack>
<Button variant="outlined" color="secondary" type="submit">Login</Button>
</form>
  </React.Fragment>
  );
}

export default Login;
