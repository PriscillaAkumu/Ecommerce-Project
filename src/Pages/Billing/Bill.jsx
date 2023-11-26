import React from 'react';

import CheckoutSection from '../../components/Checkout/Checkout';
import Banner from '../../components/Banner/Banner';
import PaymentPlan from '../../components/Payment/Payment';

const Bill = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Checkout', link: '/checkout' },
  ];

  return (
    <>
      <Banner pageTitle='Checkout' breadcrumbItems={breadcrumbItems} />

      <CheckoutSection />
      <PaymentPlan />
    </>
  );
};

export default Bill;
