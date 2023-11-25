import React, {useState} from 'react';

const Size = ({product, selectedSize, handleSizeClick}) => {
  
  return (
    <div className="sizes-container">
    <div className='title'>Size</div>
    <div className='size-options'>
        {product.sizes?.map((size, index) => (
            <button
                key={index}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => handleSizeClick(size)}
            >
                {size}
            </button>
        ))}
    </div>
</div>
  );
}

export default Size;
