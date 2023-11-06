import React from 'react';
import Banner from '../../components/Banner/Banner';
import { Box, Grid } from '@mui/material';
import Login from './Login';
import Register from './Register';

const Account = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'My Account', link: '/Account' },
  ];
  return (
    <Box>
      <Banner
        pageTitle="My Account"
        breadcrumbItems={breadcrumbItems}
      />

      <Grid container   sx={{ margin:'auto', padding:'63px 100px', }}>
        <Grid item xs={12} sm={12} md={6} >
          <Login />
        </Grid>
        <Grid item xs={12} sm={12} md={6} >
          <Register />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Account;
