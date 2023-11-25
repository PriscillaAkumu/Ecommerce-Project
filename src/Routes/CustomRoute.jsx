
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Account from '../Pages/Account/Account';
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
import Blog from '../Pages/Blog/Blog';
import About from '../Pages/About/About';

const CustomRoute = () => {
  return (
    <CartProvider>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/shop' element={<Shop/>}/>
     <Route path='/shop/:id/*' element={<SingleProduct/>}/>
     <Route path='/account' element={<Account/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </CartProvider>
  );
}

export default CustomRoute;
