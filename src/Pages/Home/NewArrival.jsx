import "./Home.css";
import Asgaard_sofa from "./img/Asgaard_sofa.png";
import ContainerStyle from "./ContainerStyle";
import SecondaryBtn from "./SecondaryBtn";
const NewArrival = () => {
  return (
    <>
      <div className="new-arrival">
        <ContainerStyle>
          <div className="new-arrival__inner">
            <div className="new_arrival_img">
              <img src={Asgaard_sofa} alt="New Arrival" />
            </div>
            <div className="new_arrival_content">
              <h4 className="new_arrival_product_heading">New Arrival</h4>
              <h2 className="new_arrival_product_title">Asgaard sofa</h2>

              <SecondaryBtn>Order Now</SecondaryBtn>
            </div>
          </div>
        </ContainerStyle>
      </div>
    </>
  );
};

export default NewArrival;
