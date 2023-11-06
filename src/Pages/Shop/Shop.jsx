import React from 'react';
import Banner from '../../components/Banner/Banner';


const Shop = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Shop', link: '/Shop' },
  ];
  return (
    <div>
 <Banner
      pageTitle="Shop"
      breadcrumbItems={breadcrumbItems}

      />
    </div>
  );
}

export default Shop;
