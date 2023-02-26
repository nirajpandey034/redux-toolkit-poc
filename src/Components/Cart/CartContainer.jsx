import React from 'react';
import { useSelector } from 'react-redux';

function CartContainer() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {cart.products.map((item) => {
        return (
          <>
            <p>
              {item.title} - Rs. {item.price} X {item.count} = Rs.{' '}
              <strong>{item.price * item.count}</strong>
            </p>
          </>
        );
      })}
    </div>
  );
}

export default CartContainer;
