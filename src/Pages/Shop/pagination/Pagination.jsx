import React from 'react';

const Pagination = ({ onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className='pagination'>
      <button onClick={() => handlePageClick(1)}>1</button>
      <button onClick={() => handlePageClick(2)}>2</button>
      <button onClick={() => handlePageClick(3)}>3</button>
      <button onClick={() => handlePageClick(4)}>4</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default Pagination;
