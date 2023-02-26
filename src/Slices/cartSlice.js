import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartId: '',
  products: [],
  totalCost: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state = initialState, item) => {
      if (
        state.products.filter((p) => {
          return p.id === item.payload.id;
        }).length === 0
      ) {
        state.products = [...state.products, { ...item.payload, count: 1 }];
      } else {
        state.products = state.products.map((ele) => {
          if (ele.id === item.payload.id) {
            ele.count = ele.count + 1;
          }
          return ele;
        });
      }
    },
    removeFromCart: (state = initialState, data) => {
      state.products = state.products.map((ele) => {
        if (ele.id === data.payload.id) {
          ele.count = ele.count - 1;
        }
        return ele;
      });
    },

    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
