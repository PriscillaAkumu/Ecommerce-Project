import styled from 'styled-components';
import MainButton from './ButtonStyle';
import ContainerStyle from './ContainerStyle';

import Trenton_modular_sofa from '/src/assets/img/Trenton_modular_sofa_.png';
import granite_dining_table from '/src/assets/img/granite_dining_table.png';
import Outdoor_bar from '/src/assets/img/Outdoor_bar.png';
import Place_console from '../../assets/img/Plain_console.png';
const TopPicks = () => {
  return (
    <>
      <div className='top-pick'>
        <ContainerStyle>
          <div className='top-pick__head'>
            <h1 className='top-pick__title'>Top Picks For You</h1>
            <p className='top-pick__desc'>
              Find a bright ideal to suit your taste with our great selection of suspension, floor
              and table lights.
            </p>
          </div>

          <div className='top-pick__inner'>
            <div className='top-pick__product'>
              <img src={Trenton_modular_sofa} alt='' className='top-pick__product__img' />
              <h3 className='top-pick__product__title'>Trenton modular sofa_3</h3>
              <p className='top-pick__product__price'>Rs. 25,000.00</p>
            </div>
            <div className='top-pick__product'>
              <img src={granite_dining_table} alt='' className='top-pick__product__img' />
              <h3 className='top-pick__product__title'>Granite dining table with dining chair</h3>
              <p className='top-pick__product__price'>Rs. 25,000.00</p>
            </div>
            <div className='top-pick__product'>
              <img src={Outdoor_bar} alt='' className='top-pick__product__img' />
              <h3 className='top-pick__product__title'>Outdoor bar table and stool</h3>
              <p className='top-pick__product__price'>Rs. 25,000.00</p>
            </div>
            <div className='top-pick__product'>
              <img src={Place_console} alt='' className='top-pick__product__img' />
              <h3 className='top-pick__product__title'>Plain console with teak mirror</h3>
              <p className='top-pick__product__price'>Rs. 25,000.00</p>
            </div>
          </div>
          <div className='top-pick__foot'>
            <MainButton>View More</MainButton>
          </div>
        </ContainerStyle>
      </div>
    </>
  );
};

export default TopPicks;
