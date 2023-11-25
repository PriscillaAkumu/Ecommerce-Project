import React from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';


const Account = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'My Account', link: '/Account' },
  ];
  return (
    <>
    <Navbar/>
      <Banner
        pageTitle="My Account"
        breadcrumbItems={breadcrumbItems}
      />

      <h2>My Account</h2>
    </>
  );
}

export default Account;
