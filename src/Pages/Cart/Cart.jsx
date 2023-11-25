
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import CartItems from './CartItems';
import './cart.css';


const Cart = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Cart', link: '/cart' },
  ];
  return (
    <>
      <Navbar />
      <Banner
        pageTitle="Cart"
        breadcrumbItems={breadcrumbItems}
      />
  
      <div style={{marginTop:'50px'}}>
    
          <CartItems/>
      </div>
   
    </>
  );
};

export default Cart;
