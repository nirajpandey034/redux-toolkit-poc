import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  user: '',
};
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.status = true;
    },
    logout: (state) => {
      state.status = false;
    },
  },
});

// reducers
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
