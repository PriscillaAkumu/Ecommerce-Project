import { Outlet, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductDescription from './ProductDescription';
import RelatedProduct from './RelatedProduct';
import './singleProduct.css';
import Navbar from '../../components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import theme from '../../Theme';
const SingleProduct = () => {
 

  return (
    <>
    
      <ThemeProvider theme={theme} >
        <Navbar />
      {/* Use Outlet to render nested routes */}
      <Outlet />
      {/* Nested routes for SingleProductPage */}
      <Routes>
        <Route path="/" element={<ProductDetails />} />
      </Routes>
        <ProductDescription />
        <RelatedProduct />
      </ThemeProvider>

    </>
  );
}

export default SingleProduct;
