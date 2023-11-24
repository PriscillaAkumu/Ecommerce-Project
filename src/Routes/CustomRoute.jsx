
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Account from '../Pages/Account/Account';
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Cart from "../Pages/Cart/Cart";


const CustomRoute = () => {
  return (
    <Routes>
      
     <Route path='/' element={<Home/>}/>
     <Route path='/shop' element={<Shop/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/account' element={<Account/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/cart' element={<Cart/>}/>

     </Routes>
  );
}

export default CustomRoute;
