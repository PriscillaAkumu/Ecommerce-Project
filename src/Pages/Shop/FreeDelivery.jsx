import ContainerStyle from "./ContainerStyle";
const FreeDelivery = () => {
  return (
    <>
      <div className="delivery">
        <ContainerStyle>
          <div className="delivery__inner">
            <div>
              <h3 className="delivery__inner__title">Free Delivery</h3>
              <p className="delivery__inner__desc">
                For all oders over $50, consectetur
                <br />
                adipim scing elit.
              </p>
            </div>
            <div>
              <h3 className="delivery__inner__title">90 Days Return</h3>
              <p className="delivery__inner__desc">
                If goods have problems, consectetur
                <br />
                adipim scing elit.
              </p>
            </div>
            <div>
              <h3 className="delivery__inner__title">Secure Payment</h3>
              <p className="delivery__inner__desc">
                100% secure payment0, consectetur
                <br />
                adipim scing elit.
              </p>
            </div>
          </div>
        </ContainerStyle>
      </div>
    </>
  );
};

export default FreeDelivery;
