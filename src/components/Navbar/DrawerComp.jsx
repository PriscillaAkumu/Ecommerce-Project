import React, { useState } from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import User from '../../assets/user.png';

const DrawerComp = () => {
  // const pages = ["Home", "Shop", "ABout", "Contact"];
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
      {/* menuItems */}
      <Drawer anchor='left' open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Shop</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
          </ListItemButton>
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
      >
        <MoreIcon />
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
        <MenuItem onClick={handleClose}>
          {' '}
          <img src={User} alt='user' />
        </MenuItem>

        <MenuItem onClick={handleClose}>
          {' '}
          <SearchOutlinedIcon />
        </MenuItem>

        <MenuItem onClick={handleClose}>
          {' '}
          <FavoriteBorderOutlinedIcon />
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ShoppingCartOutlinedIcon />
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default DrawerComp;
