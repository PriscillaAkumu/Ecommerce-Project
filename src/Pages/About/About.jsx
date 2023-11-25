import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner'

const About = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
      ];
  return (
    <>
    <Navbar/>
    <Banner
     pageTitle="Shop"
     breadcrumbItems={breadcrumbItems}
    />
    </>
  );
}

export default About;
