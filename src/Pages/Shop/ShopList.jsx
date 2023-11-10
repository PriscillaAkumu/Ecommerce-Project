import ContainerStyle from "./ContainerStyle";
import freeDelivery from "./FreeDelivery";
import Pagination from "./Pagination";
import productData from "/src/productData";

const ShopList = () => {
  return (
    <>
      <div className="shop-list">
        <ContainerStyle>
          <div className="shop-list-inner">
            {productData.map((product) => (
              <div className="shop-item" key={product.id}>
                <img src={product.img} alt={product.name} />
                <h4 className="shop-list-title">{product.name}</h4>
                <p className="shop-list-price">{product.price}</p>
              </div>
            ))}
          </div>
        </ContainerStyle>
      </div>
      <Pagination />
      <freeDelivery />
    </>
  );
};

export default ShopList;
