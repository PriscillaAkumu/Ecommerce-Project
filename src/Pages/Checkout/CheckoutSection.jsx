import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Checkout from "../../components/Checkout/Checkout";
import Banner from '../../components/Banner/Banner';

const CheckoutSection = () => {
    const breadcrumbItems = [
        { label: 'Home', link: '/' },
        { label: 'Checkout', link: '/checkout' },
    ];
    return (
        <>
            <Navbar />
            <Banner pageTitle='Checkout' breadcrumbItems={breadcrumbItems} />
            <Checkout/>
        </>
    );
}

export default CheckoutSection;
