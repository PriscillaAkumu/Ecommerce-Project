
import React, { useContext } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { ShoppingBagOutlined } from '@mui/icons-material';
import { CartContext } from '../../context/CartContext';
import './cartSidebar.css';

const CartSidebar = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    console.log(cart);
    let totalPrice = 0;
    return (
        <div className="cart-sidebar">
            <div className='shopping-cart'>
                <p>Shopping Cart</p>
                <ShoppingBagOutlined width='17px' height='19px' color='#9F9F9F' />
            </div>

            <hr className='shopping-line' />
            {cart.map((item) => {
                const numericPrice = parseFloat(item.product.price.replace(/\$|,/g, ''));
                totalPrice += item.quantity * numericPrice;
                return (
                    <div className='shopping-items' key={item.product.id}>
                        <div className='shopping-items-img'>
                            <img src={item.product.img} alt={item.product.name} />
                        </div>



                        <div className='shopping-items-desc'>
                            <h5>{item.product.name}</h5>
                            <button className='remove' onClick={() => removeFromCart(item)}><CancelIcon /></button>
                            <p>
                                <span className='qty'>{item.quantity}</span> 
                                <span className='multiply'>*</span> 
                                <span className='price'>RS.{numericPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> {/* Numeric Price */}
                            </p>

                        </div>
                    </div>
                );
            })}

            <div className='subtotal'>
                <p className='title'>Subtotal</p>
                <p className='price'>RS.{totalPrice.toFixed(2)}</p>
            </div>

            <hr className='cart-line' />
            <div className='cart-btn'>
                <button className='view-cart '><a href='/cart'>View Cart</a></button>
                <button className='checkout'><a href='#'>Checkout</a></button>
            </div>
        </div>
    );
};

export default CartSidebar;
