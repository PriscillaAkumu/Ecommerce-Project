import React from 'react';
import ContactSection from '../../components/Contact/Contact';
import Banner from '../../components/Banner/Banner';
import PaymentPlan from '../../components/Payment/Payment';

const Contact = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <>
      <Banner pageTitle='Contact' breadcrumbItems={breadcrumbItems} />
      <ContactSection />
      <PaymentPlan />
    </>
  );
};

export default Contact;
