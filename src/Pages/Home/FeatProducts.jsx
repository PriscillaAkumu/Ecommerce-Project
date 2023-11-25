import styled from 'styled-components';
import ContainerStyle from './ContainerStyle';
import MainButton from './ButtonStyle';
import side_table1 from '/src/assets/img//Granite_square.png';
import side_table2 from '/src/assets/img/Cloud_sofa.png';

const FeatProducts = () => {
  return (
    <>
      <div className='feat'>
        <ContainerStyle>
          <div className='feat-products'>
            <div>
              <img src={side_table1} alt='' className='feat_product_img' />
              <h3 className='feat_product_title'>Side Table</h3>
              <MainButton>View More</MainButton>
            </div>
            <div>
              <img src={side_table2} alt='' className='feat_product_img' />
              <h3 className='feat_product_title'>Side Table</h3>
              <MainButton>View More</MainButton>
            </div>
          </div>
        </ContainerStyle>
      </div>
    </>
  );
};

export default FeatProducts;
