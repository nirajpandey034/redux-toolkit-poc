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
    addToCart: (state, item) => {
      state.products = [...state.products, item];
    },
    removeFromCart: (state, id) => {},
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
