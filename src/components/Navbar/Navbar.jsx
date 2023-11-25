import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppBar, Button, Box, Typography, Toolbar, useMediaQuery, useTheme } from '@mui/material';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import User from '../../assets/user.png';
import DrawerComp from './DrawerComp';
import CssBaseline from '@mui/material/CssBaseline';

const myButton = {
  color: '#000',
};

const menuButton = {
  my: 2,
  color: '#000',
  display: 'block',
  textTransform: 'capitalize',
  fontSize: '16px',
};

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navbarStyle = {
    backgroundColor: isHomePage ? '#fbebb5' : '#fff',
  };

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <CssBaseline />
      <AppBar position='static' style={navbarStyle}>
        <Toolbar disableGutters>
          {isMatch ? (
            <>
              <DrawerComp sx={{ height: '300px' }} />
            </>
          ) : (
            <>
              <Box
                gap={15}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 1,
                  marginLeft: 'auto',
                }}
              >
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px' }}>
                  <Button href='/' style={menuButton}>
                    Home
                  </Button>
                  <Button href='/shop' style={menuButton}>
                    Shop
                  </Button>
                  <Button href='/about' style={menuButton}>
                    About
                  </Button>
                  <Button href='/contact' style={menuButton}>
                    Contact
                  </Button>
                  <Button href='/blog' style={menuButton}>
                    Blog
                  </Button>
                </Box>
                <Box>
                  <Button href='/account'>
                    <img src={User} alt='user' />
                  </Button>
                  <Button style={myButton}>
                    <SearchOutlinedIcon />
                  </Button>
                  <Button style={myButton}>
                    <FavoriteBorderOutlinedIcon />
                  </Button>
                  <Button href='/cart' style={myButton}>
                    <ShoppingCartOutlinedIcon />
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
