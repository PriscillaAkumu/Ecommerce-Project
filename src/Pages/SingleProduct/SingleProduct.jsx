import { Box } from '@mui/material';


import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import RelatedProduct from '../../components/RelatedProducts/RelatedProduct';
import './productDetail.css';
import Appbar from '../../components/Navbar/Appbar';
import Navbar from '../../components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import theme from '../../Theme';
const SingleProduct = () => {
  return (
    <>
      {/* <Appbar/> */}
      <ThemeProvider theme={theme} >
        <Navbar />
        <ProductDetails />
        <ProductDescription />
        <RelatedProduct />
      </ThemeProvider>

    </>
  );
}

export default SingleProduct;
