
import React from 'react';
import { CartContext } from '../../context/CartContext'; // Import useCart from CartContext
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import './cart.css';



const Cart = () => {
  const navigate = useNavigate();
  
  const { cart, removeFromCart } = useContext(CartContext); // Use cart and removeFromCart from CartContext
console.log(cart);

  

  let totalPrice = 0;




  
  



  return (
    <div className='cart'>
    <h3 className='cart-title'>Cart Items</h3>
    <div>
      {cart.map((item) => {
        const numericPrice = parseFloat(item.product.price.replace(/\$|,/g, ''));
        totalPrice += item.quantity * numericPrice;

        return (
          <div key={item.product.id} className='cart-items'>
            <img src={item.product.img} className='cart-img'/>
            <div className='cart-desc'>
              <p><b>{item.product.name}</b></p>
              <p>Size: {item.selectedSize}</p>
              <p>Color: {item.selectedColor}</p>
              <div>
              <p>Quantity: {item.quantity}</p>
                  {/* <p>Price: RS.{(item.quantity * numericPrice).toLocaleString()}</p> */}
                  <p>Price: RS.{(item.quantity * numericPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <button className='remove' onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div> 
            </div>
          );
        })}
        {/* <p><b>Total Price: RS.{totalPrice.toLocaleString()}</b></p>   */}
        <p><b>Total Price: RS.{totalPrice.toFixed(2)}</b></p>
        <button className='shopping' onClick={() => navigate('/')}>Continue Shopping</button>  
      </div>
    </div>
  );
};

export default Cart;
