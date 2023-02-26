import React from 'react';
import './style.css';
import { addToCart, removeFromCart } from '../../Slices/cartSlice';
import { useDispatch } from 'react-redux';

function ProductCTA({ data, added = false, setAdded, count }) {
  const dispatch = useDispatch();
  return (
    <>
      {count > 0 ? (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10%'}}>
          <button
            className="product-card-icon-cta "
            onClick={() => {
              dispatch(removeFromCart(data));
              setAdded(false);
            }}
          >
            -
          </button>
          <h3>{count}</h3>
          <button
            className="product-card-icon-cta "
            onClick={() => {
              dispatch(addToCart(data));
              setAdded(false);
            }}
          >
            +
          </button>
        </div>
      ) : (
        <>
          <button
            className="product-card-cta"
            onClick={() => {
              dispatch(addToCart(data));
              setAdded(true);
            }}
          >
            Add to Cart
          </button>
        </>
      )}
    </>
  );
}

export default ProductCTA;
