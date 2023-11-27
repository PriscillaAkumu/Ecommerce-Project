import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
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
import { tableCellClasses } from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';



const MainButton = styled(Button)({
 backgroundColor: 'transparent',
  color: '#000',
  fontSize: '18px',
  borderStyle: 'none',
  borderBottom: '1px solid #000',
  paddingBottom: '10px',
    '&:hover': {
    backgroundColor: '#000',
    color: '#fff',
  }
}
)



const StyledTable = styled(Table)({
  [`& .${tableCellClasses.root}`]: {
    borderBottom: 'none',
  },
});

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  height: '80px',
  borderRadius: '8px',
  backgroundColor: '#FBEBB5',
});

const StyledButton = styled(Button)({
  width: '200px',
  height: '50px',
  color: '#000',
  fontSize: '20px',
  border: '1px solid #000',
  borderRadius: '15px',
  
 
  // Responsive styles
  '@media (max-width: 600px)': {
    width: '80%',
  },
  '@media (max-width: 400px)': {
    fontSize: '16px',
  },
});

const CartItems = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useContext(CartContext);

  let totalPrice = 0;

  return (
    <>
   
     <Grid container className='cart-container'>
     <Grid item xs={12} sx={{ padding: '10px' }}>
        <MainButton onClick={() => navigate('/shop')}>
          Continue Shopping
        </MainButton>
      </Grid>

      {/* Grid item with table */}
      <Grid item xs={12} md={8} lg={9} sx={{ padding: '10px' }}>
        <Box sx={{ overflowX: 'auto' }}>
          <TableContainer component={Box} elevation={0}>
            <StyledTable>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#FBEBB5' }}>
                  <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <Typography variant='poster'>Product</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='poster'>Price</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='poster'>Quantity</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='poster'>Subtotal</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => {
                  const numericPrice = parseFloat(item.product.price.replace(/\$|,/g, ''));
                  const numberOptions = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
                  totalPrice += item.quantity * numericPrice;
                  return (
                    <TableRow key={item.product.id}>
                      <TableCell sx={{ paddingLeft: '0px' }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            flexDirection: 'row',
                            width: '100%',
                          }}
                        >
                          <StyledBox>
                            <img
                              src={item.product.img}
                              alt={item.product.name}
                              style={{
                                width: '100px',
                                height: '100%',
                                objectFit: 'contain',
                                objectPosition: 'center',
                              }}
                            />
                          </StyledBox>
                          <Typography variant='6' color='#9F9F9F'>
                            {item.product.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant='h6' color='#9F9F9F'>
                          RS.{numericPrice.toLocaleString(undefined, numberOptions)}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
                        <button className='button'>{item.quantity}</button>
                      </TableCell>
                      <TableCell>
                        <Stack
                          direction='row'
                          alignItems='center'
                          justifyContent='space-between'
                          spacing={3}
                        >
                          <Typography variant='h6' color='#000'>
                            {' '}
                            RS.
                            {(item.quantity * numericPrice).toLocaleString(
                              undefined,
                              numberOptions,
                            )}
                          </Typography>
                          <IconButton
                            sx={{
                              color: '#FBEBB5',
                              '& svg': {
                                height: '28px',
                                width: '28px',
                              },
                            }}
                            onClick={() => removeFromCart(item)}
                          >
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
        </Box>
      </Grid>

      {/* Grid item with subtotal */}
      <Grid item xs={12} md={4} lg={3} sx={{ padding: '10px', height: '300px' }}>
        <Paper
          style={{
            backgroundColor: '#FBEBB5',
            height: '100%',
            padding: '20px 40px',
            textAlign: 'center',
          }}
          elevation={0}
        >
          <Typography variant='cart'>Cart Totals</Typography>
          <Stack
            direction='row'
            spacing={3}
            marginTop='20px'
            alignItems='center'
            justifyContent='center'
          >
            <Typography variant='poster'>Subtotal</Typography>
            <Typography variant='subtotal'>
              RS.
              {totalPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Typography>
          </Stack>

          <Stack
            direction='row'
            spacing={3}
            marginTop='20px'
            alignItems='center'
            justifyContent='center'
          >
            <Typography variant='poster'>Total</Typography>
            <Typography variant='total'>
              RS.
              {totalPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Typography>
          </Stack>

          <Stack marginTop='20px' alignItems='center' justifyContent='center'>
            <StyledButton onClick={() => navigate('/checkout')}>Checkout</StyledButton>
           
          </Stack>
        </Paper>
      </Grid>
    </Grid>
    </>
   
  );
};

export default CartItems;
