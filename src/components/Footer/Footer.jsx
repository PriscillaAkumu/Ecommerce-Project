import React from 'react';
import { Link } from 'react-router-dom';
import FooterForm from './FooterForm';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className='address'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</div>
        <div>
          <h6>Links</h6>
          <nav>
            <li>
              {' '}
              <Link to='/' style={{ fontSize: '16px' }}>
                Home
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to='/shop' style={{ fontSize: '16px' }}>
                Shop
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to='/about' style={{ fontSize: '16px' }}>
                About
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to='/contact' style={{ fontSize: '16px' }}>
                Contact
              </Link>{' '}
            </li>
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
