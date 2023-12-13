import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import PaymentPlan from '../../components/Payment/Payment';
import CartItems from './CartItems';
import './cart.css';
import { ThemeProvider } from '@mui/material';
import theme from '../../Theme';

const Cart = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Cart', link: '/cart' },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Banner pageTitle='Cart' breadcrumbItems={breadcrumbItems} />

        <div style={{ marginTop: '50px', backgroundColor: '#fff' }}>
          <CartItems />
        </div>
      </ThemeProvider>
      <PaymentPlan />
    </>
  );
};

export default Cart;
