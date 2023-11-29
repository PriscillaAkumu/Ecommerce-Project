import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { AppBar, Button, Box, Toolbar, useMediaQuery, useTheme } from '@mui/material';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import User from '../../assets/user.png';
import DrawerComp from './DrawerComp';
import CssBaseline from '@mui/material/CssBaseline';
import classes from './navbar.module.css';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../Auth/authContext';

const myButton = {
  color: '#000',
  width: '28px',
  hieght: '28px',
};

const Navbar = () => {
  const { signout } = useAuth();
  const handleLogout = () => {
    signout();
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: isHomePage ? '#fbebb5' : '#fff',
    boxShadow: 'none',
  });

  const handleScroll = () => {
    if (!isHomePage) {
      const scrollPosition = window.scrollY;
      const shouldChangeColor = scrollPosition > 100;

      setNavbarStyle({
        backgroundColor: shouldChangeColor ? '#fbebb5' : '#fff',
        boxShadow: 'none',
        color: '#000',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <CssBaseline />
      <AppBar position='sticky' style={navbarStyle}>
        <Toolbar disableGutters>
          {isMatch ? (
            <>
              <DrawerComp sx={{ height: '300px' }} />
            </>
          ) : (
            <>
              <Box className={classes.navbar} gap={15}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px' }}>
                  <Button variant='text' href='/' className={classes.menuButton}>
                    Home
                  </Button>
                  <Button variant='text' href='/shop' className={classes.menuButton}>
                    Shop
                  </Button>
                  <Button variant='text' href='/about' className={classes.menuButton}>
                    About
                  </Button>
                  <Button variant='text' href='/contact' className={classes.menuButton}>
                    Contact
                  </Button>
                  <Button variant='text' href='/blog' className={classes.menuButton}>
                    Blog
                  </Button>
                </Box>
                <Box>
                  <Tooltip title='Account' arrow>
                    <Button href='/account'>
                      <img src={User} alt='user' />
                    </Button>
                  </Tooltip>
                  <Tooltip title='search' arrow>
                    <Button style={myButton}>
                      <SearchOutlinedIcon />
                    </Button>
                  </Tooltip>

                  <Tooltip title='favorite' arrow>
                    <Button style={myButton}>
                      <FavoriteBorderOutlinedIcon />
                    </Button>
                  </Tooltip>

                  <Tooltip title='cart' arrow>
                    <Button href='/cart' style={myButton}>
                      <ShoppingCartOutlinedIcon />
                    </Button>
                  </Tooltip>

                  <Tooltip title='logout' arrow>
                    <Button style={myButton} onClick={handleLogout}>
                      <LogoutIcon />
                    </Button>
                  </Tooltip>
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
