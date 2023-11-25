
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Account from '../Pages/Account/Account';
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import SingleProduct from '../Pages/SingleProduct/SingleProduct';
import About from '../Pages/About/About';
import Blog from "../Pages/Blog/Blog";
import CartProvider from '../context/CartContext';
import AuthLogin from '../components/Login/Auth';
import NotFound from '../components/NotFound';
import Dashboard from '../components/Dashboard';
import AuthProvider from '../context/authContext';
import ProtectedRoute from '../components/ProtectedRoutes';
import CheckoutSection from '../Pages/Checkout/CheckoutSection';

const CustomRoute = () => {
     return (
          <>
               <AuthProvider>
                    <CartProvider>
                    <Routes>
                         <Route path='/' element={<Home />} />
                         <Route path='*' element={<NotFound />} />
                         <Route path='/login' element={<AuthLogin />} />
                         <Route path='/dashboard' element={<Dashboard />} />
                         <Route path='/shop' element={<Shop />} />
                         <Route path='/shop/:id/*' element={<SingleProduct />} />
                         <Route path='/account' element={<Account />} />
                         <Route path='/about' element={<About />} />
                         <Route path='/contact' element={<Contact />} />
                         <Route path='/blog' element={<Blog />} />
                         <Route path='/cart' element={<Cart />} />
                         <Route path='/checkout' element={<CheckoutSection />} />
                    </Routes>
                    </CartProvider>
                
               </AuthProvider>
          </>
     );
};

export default CustomRoute;