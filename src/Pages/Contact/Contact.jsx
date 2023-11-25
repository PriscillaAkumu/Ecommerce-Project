import React from 'react';
import ContactSection from '../../components/Contact/Contact';
import Banner from '../../components/Banner/Banner';
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <>
    <Navbar/>
      <Banner pageTitle='Contact' breadcrumbItems={breadcrumbItems} />
      <ContactSection />
      <PaymentPlan />
    </>
  );
};

export default Contact;
