import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Profile from './Profile';

const About = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
      ];
  return (
    <>
    <Navbar/>
    <Banner
     pageTitle="About"
     breadcrumbItems={breadcrumbItems}
    />
    <Profile/>
    </>
  );
}

export default About;
