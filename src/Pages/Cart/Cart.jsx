import React from 'react';
import Banner from '../../components/Banner/Banner';
import './cart.css';
import Navbar from '../../components/Navbar/Navbar';

const Cart = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Cart', link: '/cart' },
      ];
  return (
    <div >
      <Navbar/>
      <Banner
      pageTitle="Cart"
      breadcrumbItems={breadcrumbItems}

      />
     
    </div>
  );
}

export default Cart;
