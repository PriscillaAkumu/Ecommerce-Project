// ShoppingCartSidebar.js

import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ShoppingBag } from '@mui/icons-material';
import { CartContext } from '../../context/CartContext';
import  './cartSidebar.css';

const CartSidebar = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    console.log(cart);
    let totalPrice = 0;
    return (
        <div className="cart-sidebar">
            <div className='shopping-cart'>
                <h4>Shopping Cart</h4>
                <ShoppingBag width='17px' height='19px' color='#9F9F9F' />
            </div>
            <hr className='shopping-line' />

            {/* Render cart items and other content using cart state */}
            {cart.map((item) => {
                 const numericPrice = parseFloat(item.product.price.replace(/\$|,/g, ''));
                 totalPrice += item.quantity * numericPrice;
                 return (
                <div className='shopping-items' key={item.product.id}>
                    <div className='shopping-items-img'>
                    <img src={item.product.img} alt={item.product.name} />
                    </div>
                  
                    <div >
                        <h5>{item.product.name}</h5>
                        <button className='remove' onClick={() => removeFromCart(item)}><CloseIcon /></button>
                            <p>
                                <span className='qty'>{item.quantity}</span> {/* Quantity */}
                                <span className='multiply'>*</span> {/* Multiplication symbol */}
                                <span className='price'>RS.{numericPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> {/* Numeric Price */}
                            </p>

                    </div>
                </div>
                 );
            })}

            <div>
                <p>Subtotal</p>
                <p> RS{cart.reduce((total, item) => total + item.quantity * item.product.price, 0).toFixed(2)}</p>
            </div>
          
            {/* Add your cart items and other content here */}
            <div>
                <button><a href='/cart'>View Cart</a></button>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default CartSidebar;
