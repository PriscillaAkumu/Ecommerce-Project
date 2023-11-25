/** @format */

import React from 'react';
import Header from './Header';
import FormSocials from './ContactForms/FormSocials';
import { Grid } from '@mui/material';
import classes from './Container.module.css';

export default function ContactSection() {
  return (
    <Grid container className={classes.container}>
      <Header />
      <FormSocials />
    </Grid>
  );
}
