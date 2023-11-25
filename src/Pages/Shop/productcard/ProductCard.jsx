const ProductCard = ({ product }) => {
  return (
    <div className="shop-item">
      <img src={product.img} alt={product.name} />
      <div className="inner-wrapper">
        <h4 className="shop-list-title">{product.name}</h4>
        <p className="shop-list-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
