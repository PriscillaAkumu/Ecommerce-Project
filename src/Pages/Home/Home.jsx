import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import productData from '../../Data/productData';
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
    <Navbar/>
    <div>
      
      {productData.map((product) => (
            <div key={product.id}>
              <Link to={`/shop/${product.id}`}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p><b>RS. {product.price}</b></p>
              </Link>
             
            </div>
          ))}
    
    </div>
    </>
  );
}

export default Home;
