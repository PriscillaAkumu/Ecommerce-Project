import ContainerStyle from "../ContainerStyle";
import Pagination from "../pagination/Pagination";
import productData from "/src/productData";
import ProductCard from "../productcard/ProductCard";
import FreeDelivery from "../freedelivery/FreeDelivery";
const ShopList = () => {
  return (
    <>
      <div className="shop-list">
        <ContainerStyle>
          <div className="shop-list-inner">
            {productData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </ContainerStyle>
      </div>
      <Pagination />
      <FreeDelivery />
    </>
  );
};

export default ShopList;
