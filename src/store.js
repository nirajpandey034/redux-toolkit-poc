import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slices/loginSlice';
import cartReducer from './Slices/cartSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
