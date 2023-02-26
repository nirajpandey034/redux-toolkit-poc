import React from 'react';
import ProductCard from './ProductCard';
import './style.css';
function ProductContainer() {
  const products = [
    {
      id: 1,
      title: 'product 1',
      description: 'Product 1 description',
      price: 250,
    },
    {
      id: 2,
      title: 'product 2',
      description: 'Product 2 description',
      price: 350,
    },
    {
      id: 3,
      title: 'product 3',
      description: 'Product 3 description',
      price: 450,
    },
    {
      id: 4,
      title: 'product 4',
      description: 'Product 4 description',
      price: 550,
    },
  ];
  return (
    <div className="productListContainer">
      {products.map((item, index) => {
        return <ProductCard key={index} data={item} />;
      })}
    </div>
  );
}

export default ProductContainer;
