import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContainerStyle from '../ContainerStyle';
import Pagination from '../pagination/Pagination';
import productData from '/src/productData';
import ProductCard from '../productcard/ProductCard';
import PaymentPlan from '../../../components/Payment/Payment';

const itemsPerPage = 16; // Adjust the number of items per page as needed

const ShopList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = productData.slice(startIndex, endIndex);

  return (
    <>
      <div className='shop-list'>
        <ContainerStyle>
          <div className='shop-list-inner'>
            {displayedProducts.map((product) => (
              <Link to={`/shop/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </ContainerStyle>
      </div>
      <Pagination onPageChange={handlePageChange} />
      <PaymentPlan />
    </>
  );
};

export default ShopList;
