import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';
import Logo from '../../assets/logo.png';
import CustomBreadcrumb from '../Breadcrumb/CustomBreadcrumb';
import './banner.css';



const textOverlay = {
  color: '#000',
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: '48px',
};

const Banner = ({ pageTitle, breadcrumbItems }) => {
  return (
    <Grid container elevation={0} className='banner'  alignItems='center'>
      <Grid item xs={12}>
        <Stack
          direction='column'
          alignItems='center'
          spacing='3'
          justifyContent='center'
          style={textOverlay}
        >
          <img src={Logo} alt='logo' />
          <Typography variant='h4' style={textOverlay}>
            {pageTitle}
          </Typography>
          <CustomBreadcrumb items={breadcrumbItems} margintop='30px' />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Banner;
