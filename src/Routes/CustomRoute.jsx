import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Shop from '../Pages/Shop/Shop';
import Account from '../Pages/Account/Account';
import Contact from '../Pages/Contact/Contact';
import Bill from '../Pages/Billing/Bill';
import AuthLogin from '../components/Login/Auth';
// import PaymentPlan from '../components/Payment/Payment';
import NotFound from '../components/NotFound';
import Dashboard from '../components/Dashboard';
import AuthProvider from '../context/authContext';
import ProtectedRoute from '../components/ProtectedRoutes';

const CustomRoute = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<Bill />}/> */}
          {/* NotFound Route */}
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<AuthLogin />} />
          {/* <Route path='/paymentplan' element={<PaymentPlan />}/> */}
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/Shop' element={<Shop />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Contact' element={<Contact />} />
          {/* <Route path='/Contact' element={</>}/> */}
        </Routes>
      </AuthProvider>
    </>
  );
};

export default CustomRoute;
