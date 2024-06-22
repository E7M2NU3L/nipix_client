// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedin: true,
  isRegistered: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // Either mutate the state directly
      state.isLoggedin = true;
      state.isRegistered = true;
      state.userData = action.payload.userData;
      // Do not return a new state object here
    },
    logout: (state) => {
        state.isLoggedin = false;
        state.isRegistered = false;
        state.userData = null;
      },
    }
})

export const authStatus = (state) => state.auth;
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;