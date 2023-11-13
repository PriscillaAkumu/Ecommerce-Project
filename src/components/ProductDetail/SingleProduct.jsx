import React, {useContext, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import productData from '../../Data/productData';
import  { CartContext } from '../../context/CartContext';

export default function SingleProduct() {
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
   const {addToCart} = useContext(CartContext);
   const [addedToCart, setAddedToCart] = useState(false);
   const handleAddToCart = () => {
     addToCart(product, selectedSize, selectedColor, quantity);
     setAddedToCart(true);
   };
  return (
    <div>
      
    </div>
  );
}
