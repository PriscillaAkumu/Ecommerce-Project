import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Divider from '@mui/material/Divider';
import Elipse from '../../assets/contact/Ellipse 2.png';
import { Stack, styled } from '@mui/material';
import FormDialog from '../Modals/Dialog';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
const StyledTable = styled(Table)({
  [`& .${tableCellClasses.root}`]: {
    borderBottom: 'none',
    paddingLeft: 0,
  },
});
export default function Billing({ register, control, handleSubmit, formState }) {
  // handling errors
  const { errors } = formState;
  const { cart } = useContext(CartContext);
  let totalPrice = 0;

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: '500',
                  }}
                >
                  Product
                </Typography>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <Typography
                  variant='h6'
                  sx={{
                    fontWeight: '500',
                  }}
                >
                  Subtotal
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {cart.map((item) => {
            const numericPrice = parseFloat(item.product.price.replace(/\$|,/g, ''));
            const numberOptions = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
            totalPrice += item.quantity * numericPrice;
            return (
              <TableBody>
                {/* Row 1 */}
                <TableRow key={item.product.id}>
                  <TableCell>
                    <Stack direction='row'>
                      <Typography
                        variant='body1'
                        style={{
                          color: '#9F9F9F',
                        }}
                      >
                        {' '}
                        {item.product.name}
                      </Typography>
                      <Typography>*{item.quantity}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>
                    <Typography
                      variant='body1'
                      sx={{
                        fontWeight: '300',
                      }}
                    >
                      RS.{numericPrice.toLocaleString(undefined, numberOptions)}{' '}
                    </Typography>
                  </TableCell>
                </TableRow>
                {/* Row 2 */}
                <TableRow>
                  <TableCell>
                    <Typography
                      variant='body1'
                      sx={{
                        fontWeight: '400',
                      }}
                    >
                      Subtotal
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>
                    <Typography
                      variant='body1'
                      sx={{
                        fontWeight: '300',
                      }}
                    >
                      {' '}
                      RS.{(item.quantity * numericPrice).toLocaleString(undefined, numberOptions)}
                    </Typography>
                  </TableCell>
                </TableRow>
                {/* Row 3 */}
              </TableBody>
            );
          })}
          <TableRow>
            <TableCell>
              <Typography
                variant='body1'
                sx={{
                  fontWeight: '400',
                }}
              >
                Total
              </Typography>
            </TableCell>
            <TableCell sx={{ textAlign: 'right' }}>
              <Typography
                variant='body1'
                sx={{
                  color: '#B88E2F',
                  fontWeight: '700',
                }}
              >
                {' '}
                RS.
                {totalPrice.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Typography>
            </TableCell>
          </TableRow>
        </StyledTable>
      </TableContainer>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          marginBottom: '10px',
          marginTop: '20px',
        }}
      >
        <img
          src={Elipse}
          alt='logo'
          style={{
            width: '18px',
            height: '18px',
          }}
        />
        <Typography
          variant='h4'
          style={{
            fontSize: '16px',
            fontWeight: '400',
          }}
        >
          Direct Bank Transfer
        </Typography>
      </div>
      <div style={{ color: '#9F9F9F' }}>
        <Typography variant='body-2'>
          {' '}
          Make your payment directly into our bank account. Please use <br />
          your Order ID as payment reference. Your order will not be <br />
          shipped until the funds have cleared in our account.
        </Typography>
      </div>
      <div style={{ color: '#9F9F9F', fontSize: '16px', fontWeight: '400' }}>
        <input
          {...register('paymentMode', {
            required: 'Select a payment mode',
          })}
          type='radio'
          name='paymentMode'
          value='direct-bank-transfer'
          id='field-radio'
        />{' '}
        Direct Bank Transfer
        <br />
        {/* <label htmlFor="field-sun"> */}
        <input
          {...register('paymentMode', {
            required: 'Select a payment mode',
          })}
          type='radio'
          name='paymentMode'
          value='cashondelivery'
          id='field-radio'
        />{' '}
        Cash On Delivery
        <br />
        <Typography variant='body-3' sx={{ color: 'red' }} mb={2}>
          {errors.paymentMode?.message}
        </Typography>
      </div>
      <div>
        <Typography variant='body-2'>
          Your personal data will be used to support your experience <br />
          throughout this website, to manage access to your account and for other purposes described
          in our <b>privacy policy.</b>
        </Typography>
      </div>
      <Stack
        direction='row'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <FormDialog
          type={'Place Order'}
          label={'Place Order'}
          sx={{
            color: 'black',
            width: '318px',
            height: '64px',
            borderRadius: '15px',
            border: '1px solid black',
          }}
        />
      </Stack>
    </>
  );
}
