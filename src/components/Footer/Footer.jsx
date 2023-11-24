import React from "react";
import FooterForm from "./FooterForm";
import './footer.css';

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
