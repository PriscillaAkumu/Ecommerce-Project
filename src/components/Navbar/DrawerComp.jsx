import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import User from '../../assets/user.png';


const hoverStyles = {
border: '1px solid',
  backgroundColor: '#fff',
  color: '#FBEBB5',

};



const DrawerComp = () => {
  const drawerWidth = 150;
  const drawerHeight = 300;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* menuItems */}
     
      <Drawer
        variant='temporary'
        anchor='left'
        open={openDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        onClose={() => setOpenDrawer(false)}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#FBEBB5',
            transition: 'background-color 0.3s ease',
           
            
          },
        }}
      >


        <List
        
          sx={{
            width: drawerWidth,
            backgroundColor: '#FBEBB5',
            boxSizing: 'border-box',
            marginTop:'50px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign:'center'
           
          }}
        >



          <Link to='/'>
            <ListItemButton  sx={{'&:hover': hoverStyles,  }}>
              <ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link to='/shop'>
            <ListItemButton  sx={{  '&:hover': hoverStyles,  }}>
              <ListItemIcon>
                <ListItemText>Shop</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link to='/about' >
            <ListItemButton  sx={{  '&:hover': hoverStyles,   }}>
              <ListItemIcon>
                <ListItemText>About</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>

          <Link to='/contact'>
            <ListItemButton  sx={{  '&:hover': hoverStyles,   }}>
              <ListItemIcon>
                <ListItemText>Contact</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: 'black', marginRight: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color='black' />
      </IconButton>

    
      {/* option button for icons  */}

      <IconButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: '#000' }}
      >
        <MoreIcon color='black' />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/account'>
          <MenuItem onClick={handleClose}>
            {' '}
            <img src={User} alt='user' />
          </MenuItem>
        </Link>

        <MenuItem onClick={handleClose}>
          {' '}
          <SearchOutlinedIcon />
        </MenuItem>

        <Link>
          <MenuItem onClick={handleClose}>
            {' '}
            <FavoriteBorderOutlinedIcon />
          </MenuItem>
        </Link>

        <Link to='/cart'>
          <MenuItem onClick={handleClose}>
            <ShoppingCartOutlinedIcon />
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
};

export default DrawerComp;
