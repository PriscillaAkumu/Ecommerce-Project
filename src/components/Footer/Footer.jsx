import React from "react";
import { Link } from "react-router-dom";
import FooterForm from "./FooterForm";
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className='address'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</div>
        <div>
          <h6>Links</h6>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
        </div>
        <div>
          <h6>Help</h6>
          <nav>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </nav>
        </div>
        <div className='newsletter'>
          <h6>Newsletter</h6>

          <FooterForm />
        </div>
      </div>
      <div className='copy'>2022 Meubel House. All rights reverved</div>
    </footer>
  );
};

export default Footer;
