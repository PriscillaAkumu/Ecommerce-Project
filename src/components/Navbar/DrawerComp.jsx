import React, { useState } from "react";
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
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import User from '../../assets/user.png';




const DrawerComp = () => {
  const drawerWidth = 150
  // const drawerHeight = 300
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


  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* menuItems */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        onClose={() => setOpenDrawer(false)}
        sx={{  width: drawerWidth,  }}
      >
        <List  sx={{
          width: drawerWidth, backgroundColor: '#FBEBB5', boxSizing: 'border-box', paddingTop: '40px', justifyContent: 'center',
        }}>

          <ListItemButton >
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton >
            <ListItemIcon>
              <ListItemText>Shop</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton >
            <ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton >
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
          </ListItemButton>

        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginRight: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="black" />
      </IconButton>

      {/* option button for icons  */}

      <IconButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: '#000' }}

      >
        <MoreIcon color="black" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>  <img src={User} alt='user' /></MenuItem>

        <MenuItem onClick={handleClose}>  <SearchOutlinedIcon /></MenuItem>

        <MenuItem onClick={handleClose}> <FavoriteBorderOutlinedIcon /></MenuItem>

        <MenuItem onClick={handleClose}><ShoppingCartOutlinedIcon /></MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default DrawerComp;