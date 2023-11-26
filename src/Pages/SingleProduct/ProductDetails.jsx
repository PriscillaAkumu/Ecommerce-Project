import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productData from '../../Data/productData';
import { CartContext } from '../../Context/CartContext';
import Size from './Size';
import Color from './Color';
import FooterIcon from '../../components/Icons/FooterIcon';
import ProductBreadcrumb from '../../components/Breadcrumb/ProductBreadCrumb';
import CartSidebar from '../../components/CartSidebar/CartSidebar';
import { Grid, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Rating from '../../components/Icons/Rating';
import Sofa1 from '../../assets/sofa1.png';
import Sofa2 from '../../assets/sofa2.png';
import Sofa3 from '../../assets/sofa3.png';
import Sofa4 from '../../assets/sofa4.png';
import Line from '../../assets/line.png';

const imageStyle = {
  width: '76px',
  height: '80px',
  padding: 0,
  margin: '0px',
  backgroundColor: '#FBEBB5',
  borderRadius: '8px',
  overflow: 'hidden',
  objectFit: 'contain',
  objectPosition: 'center',
};

const imageBig = {
  width: '100%',
  height: '100%',
  backgroundColor: '#FBEBB5',
  borderRadius: '8px',
  overflow: 'hidden',
  objectFit: 'contain',
  objectPosition: 'center',
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  // declare variable for products array
  const product = productData.find((product) => product.id === parseInt(id, 10));
  if (!product) {
    return <div>product not found</div>;
  }

  // set useState for size
  const [selectedSize, setSelectedSize] = useState('');
  const handleSizeClick = (size) => {
    if (selectedSize === size) {
      // Deselect the size if it's already selected
      setSelectedSize(null);
    } else {
      // Select the size when clicked
      setSelectedSize(size);
    }
  };

  // set useState for color
  const [selectedColor, setSelectedColor] = useState('');
  const handleColorClick = (color) => {
    if (selectedColor === color) {
      // Deselect the color if it's already selected
      setSelectedColor(null);
    } else {
      // Select the color when clicked
      setSelectedColor(color);
    }
  };

  //set state for quantity
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // addToCart Context
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedToCart(true);
    setSidebarVisible(true);

    setTimeout(() => {
      navigate('/cart');
    }, 60000);
  };

  return (
    <>
      <Grid item xs={12} sx={{ marginTop: '40px', padding: '0px 40px' }}>
        <ProductBreadcrumb product={product} />
      </Grid>
      <Grid
        className='grid-container'
        container
        wrap='nowrap'
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        sx={{
          margin: '0px auto',
          justifyContent: 'flex-start',
          padding: '20px',
        }}
      >
        <Grid
          className='grid-item'
          item
          xs={12}
          sm={12}
          md={1}
          lg={1}
          sx={{
            width: '100%',
            height: '100%',
            padding: {
              xs: '5px 20px',
              sm: '5px 20px',
              md: '5px 0px 5px 20px',
              lg: '5px 0px 5px 20px',
            },
          }}
        >
          <Stack
            flexGrow={0}
            gap={1}
            direction={{ xs: 'row', sm: 'row', md: 'column' }}
            sx={{ width: '100%', justifyContent: 'center' }}
          >
            <img src={Sofa1} alt='sofa' style={imageStyle} />
            <img src={Sofa2} alt='sofa' style={imageStyle} />
            <img src={Sofa3} alt='sofa' style={imageStyle} />
            <img src={Sofa4} alt='sofa' style={imageStyle} />
          </Stack>
        </Grid>
        <Grid
          className='grid-item'
          item
          xs={12}
          sm={12}
          md={5}
          lg={3}
          sx={{ width: '100%', height: '500px', padding: '5px 20px ' }}
        >
          <img src={product.img} alt={product.name} style={imageBig} />
        </Grid>
        <Grid
          className='grid-item'
          item
          xs={12}
          sm={12}
          md={6}
          lg={8}
          height='680px'
          sx={{ padding: '5px 20px' }}
        >
          <Typography variant='h4' color='#000'>
            {product.name}
          </Typography>
          <Typography variant='h5'>RS.{product.price}</Typography>
          <Stack spacing={2} direction='row' marginBottom='20px'>
            <Rating />
            <img src={Line} alt='line' />
            <Typography>5 Customer Reviews</Typography>
          </Stack>
          <Typography variant='body' color='#000' textAlign='left'>
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </Typography>

          <Stack direction='column' marginBottom='20px'>
            <Size product={product} selectedSize={selectedSize} handleSizeClick={handleSizeClick} />
            <Color
              product={product}
              selectedColor={selectedColor}
              handleColorClick={handleColorClick}
            />
          </Stack>

          <Stack direction='row' spacing={2} marginBottom='20px'>
            <button className='quantity'>
              <RemoveIcon onClick={decreaseQuantity} />
              <span>{quantity}</span>
              <AddIcon onClick={increaseQuantity} />
            </button>

            <button className='add' onClick={handleAddToCart}>
              Add To Cart
            </button>
          </Stack>
          <hr className='hr' />
          <FooterIcon />
        </Grid>
      </Grid>

      {isSidebarVisible && (
        <>
          <div className='overlay' onClick={() => setSidebarVisible(false)} />
          <CartSidebar />
        </>
      )}
    </>
  );
};

export default ProductDetails;
