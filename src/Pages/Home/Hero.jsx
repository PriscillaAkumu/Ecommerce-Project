import styled from 'styled-components';
import heroImg from '/src/assets/img/heroimg.png';
import ContainerStyle from './ContainerStyle';

const MainButton = styled.button`
  background-color: transparent;
  color: #000;
  font-size: 24px;
  border-style: none;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <ContainerStyle>
          <div className='hero__inner'>
            <div className='hero__text'>
              <h1 className='hero__text__title'>
                Rocket single
                <br />
                seater
              </h1>
              <MainButton>Shop Now</MainButton>
            </div>
            <div className='hero__image'>
              <img src={heroImg} alt='rocket' className='heroImg' />
            </div>
          </div>
        </ContainerStyle>
      </div>
    </>
  );
};

export default Hero;
