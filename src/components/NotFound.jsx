import React from 'react';
import { Typography } from '@mui/material';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'black', color: 'white' }}>
      <Typography variant='h4'> 404!</Typography>
      <Typography variant='h4'> Page not found!</Typography>
    </div>
  );
}
