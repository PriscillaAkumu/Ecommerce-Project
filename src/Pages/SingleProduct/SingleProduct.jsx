import { Box } from '@mui/material';


import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import RelatedProduct from '../../components/RelatedProducts/RelatedProduct';
import Navbar from '../../components/Navbar/Navbar';
const SingleProduct = () => {
  return (
  <Box>
  <Navbar/>
    <ProductDetails/>
    <ProductDescription />
    <RelatedProduct />
  </Box>
  );
}

export default SingleProduct;
