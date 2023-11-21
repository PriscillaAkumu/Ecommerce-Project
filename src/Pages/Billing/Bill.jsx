import React from 'react';

import CheckoutSection from "../../components/Checkout/Checkout"
import Banner from '../../components/Banner/Banner';

const Bill = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Checkout', link: '/' },
  ];

  return (
    <>
    <Banner
      pageTitle="Checkout"
      breadcrumbItems={breadcrumbItems}

      />
 
 <CheckoutSection />
    </>
  );
}

export default Bill;








































 