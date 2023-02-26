import React from 'react';
import './style.css';

function ProductCard({ data }) {
  return (
    <div className="productCard">
      <p>
        <strong>{data.title}</strong>
      </p>
      <p>{data.description}</p>
      <p>Rs. {data.price}</p>
    </div>
  );
}

export default ProductCard;
