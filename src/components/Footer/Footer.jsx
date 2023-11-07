import React from "react";
import { Link } from "react-router-dom";
import FooterForm from "./FooterForm";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="address">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </div>
        <div>
          <h6>Links</h6>
          <nav>
            <li>Home</li>
            <li>shop</li>
            <li>About</li>
            <li>Contact</li>

            {/* <Link to="/">Home</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link> */}
          </nav>
        </div>
        <div>
          <h6>Help</h6>
          <nav>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
            {/* <Link to="/payment-options">Payment Options</Link>
                        <Link to="/returns">Returns</Link>
                        <Link to="/privacy-policies">Privacy Policies</Link> */}
          </nav>
        </div>
        <div className="newsletter">
          <h6>Newsletter</h6>

          <FooterForm />
        </div>
      </div>
      <div className="copy">2022 Meubel House. All rights reverved</div>
    </footer>
  );
};

export default Footer;
