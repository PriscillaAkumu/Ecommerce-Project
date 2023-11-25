import React from 'react';
// import FaceBook from "../../assets/facebook.png";
// import LinkedIn from "../../assets/linkedIn.png";
// import Twitter from "../../assets/twitter.png";
import TwitterOutlined from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Grid, Typography, Stack, Container } from '@mui/material';

export default function FooterIcon() {
  const myIcons = {
    display: 'flex',
    gap: '10px',
    direction: 'column',
    color: '#000',
  };
  return (
    <>
      <Grid container direction='column' marginTop='40px' paddingBottom='20px'>
        <Stack xs={12} spacing={8.2} direction='row'>
          <Typography>SKU</Typography>
          <Typography>: SS001</Typography>
        </Stack>
        <Stack xs={12} spacing={2.5} direction='row'>
          <Typography>Category</Typography>
          <Typography>: Sofas</Typography>
        </Stack>
        <Stack xs={12} spacing={7} direction='row'>
          <Typography>Tags</Typography>
          <Typography>: Sofa, Chair, Home, Shop</Typography>
        </Stack>
        <Stack xs={12} spacing={6} direction='row' alignItems='center'>
          <Typography> Share </Typography>
          <div style={myIcons}>
            <p>:</p>
            <FacebookIcon height='20px' width='20px' />
            <LinkedInIcon height='20px' width='20px' />
            <TwitterOutlined height='20px' width='20px' />
          </div>
        </Stack>
      </Grid>
    </>
  );
}
