import React from 'react';

import ProductCard from './ProductCard';

const style = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
};

const ProductList = ({ products }) => {
  return (
    <div className="productList_container" style={style}>
      {products.map((product) => {
        return (
          <div key={product._id}>
            <ProductCard productData={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
