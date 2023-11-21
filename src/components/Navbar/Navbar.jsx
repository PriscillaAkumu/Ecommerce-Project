import React, { useState } from "react";

import {
  AppBar,
  Button,
  Box,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import User from '../../assets/user.png';
import DrawerComp from "./DrawerComp";



const myButton = {
  color: '#000',
}

const menuButton = {
  my: 2,
  color: '#000',
  display: 'block',
  textTransform: 'capitalize',
  fontSize: '16px',


}

const Navbar = () => {

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  return (

    <Box sx={{ position: 'relative', zIndex: 999}}>
    <AppBar  sx={{ background: '#fff', postion:'fixed', }}>
      <Toolbar>

        {isMatch ? (
          <>

            <DrawerComp sx={{ height: '300px' }} />

          </>
        ) : (
          <>

            <Box gap={15} sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: 1,
              marginLeft: 'auto',


            }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px' }}>
                {/* {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ }}
                  >
                    {page}
                  </Button>
                ))} */}


                <Button href="/" style={menuButton}>
                  Home
                </Button>
                <Button href="/shop" style={menuButton}>
                  Shop
                </Button>
                <Button href="/about" style={menuButton}>
                  About
                </Button>
                <Button href="/contact" style={menuButton}>
                  Contact
                </Button>

              </Box>
              <Box  >
                <Button href="/account" >
                  <img src={User} alt='user' />
                </Button>
                <Button style={myButton}>
                  <SearchOutlinedIcon />
                </Button>
                <Button style={myButton}>
                  <FavoriteBorderOutlinedIcon />
                </Button>
                <Button style={myButton}>
                  <ShoppingCartOutlinedIcon />
                </Button>
              </Box>

            </Box>


          </>
        )}
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default Navbar;