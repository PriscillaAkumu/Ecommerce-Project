import ContainerStyle from "./ContainerStyle";
import Pagination from "./Pagination";
import productData from "/src/productData";
import ProductCard from "./ProductCard";

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
    </>
  );
};

export default ShopList;
