import React from 'react';
import Banner from '../../components/Banner/Banner';
import { Box, Grid } from '@mui/material';


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

      <h2>My Account</h2>
    </Box>
  );
}

export default Account;
