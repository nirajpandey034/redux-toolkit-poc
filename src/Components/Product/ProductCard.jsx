import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import ProductCTA from './ProductCTA';

function ProductCard({ data }) {
  const cart = useSelector((state) => state.cart);
  const [added, setAdded] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(
      cart.products?.filter((item) => {
        return item.id === data.id;
      })[0]?.count
    );
  }, [cart]);
  return (
    <div className="productCard">
      <p>
        <strong>{data.title}</strong>
      </p>
      <p>{data.description}</p>
      <p>
        Rs. <strong>{data.price}</strong>
      </p>
      <ProductCTA data={data} added={added} setAdded={setAdded} count={count} />
    </div>
  );
}

export default ProductCard;
