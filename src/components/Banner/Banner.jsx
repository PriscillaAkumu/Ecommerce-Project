import React from 'react';

import { Grid, Stack, Typography } from '@mui/material';
import Logo from '../../assets/logo.png';
import CustomBreadcrumb from '../Breadcrumb/CustomBreadcrumb';

const myStyles = {
  background: `url('/src/assets/hero-bg.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '316px',
  width: '100%',
};

const textOverlay = {
  color: '#000',
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: '48px',
};

const Banner = ({ pageTitle, breadcrumbItems }) => {
  return (
    <Grid container elevation={0} style={myStyles} alignItems='center'>
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
