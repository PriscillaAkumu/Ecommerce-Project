import React from 'react';
import Banner from '../../components/Banner/Banner';
import './cart.css';

const Cart = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Cart', link: '/Cart' },
  ];
  return (
    <>
      <Banner pageTitle='Cart' breadcrumbItems={breadcrumbItems} />
    </>
  );
};

export default Cart;
