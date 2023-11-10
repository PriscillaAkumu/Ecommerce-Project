import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Account from "../Pages/Account/Account";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";

const CustomRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
  );
};

export default CustomRoute;
