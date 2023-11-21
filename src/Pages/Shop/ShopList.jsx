import ContainerStyle from "./ContainerStyle";
import Pagination from "./Pagination";
import productData from "/src/productData";
import ProductCard from "./ProductCard";
import FreeDelivery from "./FreeDelivery";
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
