import React, {useState} from 'react';


const Color = ({product, selectedColor, handleColorClick}) => {
    

  return (
    <div className="colors-container">
    <div className='title'>Color</div>
    <div className="color-options">
        {product.colors?.map((color, index) => (
            <button
                key={index}
                className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
            >
               {color}
            </button>
        ))}
    </div>
</div>
  );
}

export default Color;