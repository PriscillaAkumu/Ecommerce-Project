import React from 'react';
import Banner from '../../components/Banner/Banner';
import AuthLogin from '../../components/Login/Auth';
import PaymentPlan from '../../components/Payment/Payment';


const Account = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'My Account', link: '/Account' },
  ];
  return (
    <div>
 <Banner
      pageTitle="My Account"
      breadcrumbItems={breadcrumbItems}

      />

      <AuthLogin />

      <PaymentPlan />

    </div>
  );
}

export default Account;
