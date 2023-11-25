import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Stack,
  Paper,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  IconButton,
  styled,
} from '@mui/material';
import { tableCellClasses } from "@mui/material/TableCell";
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTable = styled(Table)({
  [`& .${tableCellClasses.root}`]: {
    borderBottom: "none",


  }
});

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '106px',
  height: '106px',
  borderRadius: '8px',
  backgroundColor: '#FBEBB5',
});



const CartItems = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useContext(CartContext);

  let totalPrice = 0;

  return (
    <Grid container className='cart-container'>
      {/* Grid item with table */}
      <Grid item xs={12} md={8} lg={9} sx={{ padding: '10px' }} className='grid-item'>
        <TableContainer component={Box} elevation={0} >
          <StyledTable>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#FBEBB5' }}>
                <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle', }}>
                  <Typography >Product</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Price</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Quantity</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Subtotal</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => {
                const numericPrice = parseFloat(item.product.price.replace(/\$|,/g, ''));
                totalPrice += item.quantity * numericPrice;
                return (
                  <TableRow key={item.product.id}>
                    <TableCell sx={{ paddingLeft: '0px' }}>
                      <Stack spacing={3} alignItems='center' direction='row'>
                        <StyledBox>
                          <img
                            src={item.product.img}
                            alt={item.product.name}
                            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
                          />
                        </StyledBox>
                        <Typography variant='5' color='#9F9F9F' width='100%'>{item.product.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>RS.{numericPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</TableCell>
                    <TableCell  sx={{ textAlign: 'center', verticalAlign: 'middle', }}><button className='button'>{item.quantity}</button></TableCell>
                    <TableCell>
                      <Stack direction='row' alignItems='center' justifyContent='space-between' spacing={3}>
                        <Typography> RS.{(item.quantity * numericPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                        <IconButton color='#FBEBB5' onClick={() => removeFromCart(item)}>
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </Grid>

      {/* Grid item with subtotal */}
      <Grid item xs={12} md={4} lg={3} sx={{ padding: '10px' }} className='grid-item'>
        <Paper style={{ backgroundColor: '#FBEBB5', padding: 0 }} elevation={0}>
          <Typography textAlign='center'>Cart Totals</Typography>
          <Stack direction='row' spacing={2}>
            <Typography variant="h6">Subtotal</Typography>
            <Typography variant='h6'>RS.{totalPrice.toFixed(2)}</Typography>
          </Stack>

          <Stack direction='row' spacing={2}>
            <Typography>Total</Typography>
            <Typography>RS.{totalPrice.toFixed(2)}</Typography>
          </Stack>

          <Button onClick={() => navigate('/checkout')}>Checkout</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CartItems;
