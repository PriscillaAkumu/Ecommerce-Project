import React from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import AuthLogin from '../../components/Login/Auth';
import PaymentPlan from '../../components/Payment/Payment';

const Account = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'My Account', link: '/account' },
  ];
  return (
    <>
      <Navbar />
      <Banner pageTitle='My Account' breadcrumbItems={breadcrumbItems} />
      <AuthLogin />
      <PaymentPlan />
    </>
  );
};

export default Account;
