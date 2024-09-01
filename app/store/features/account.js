"use client"
import { createSlice } from '@reduxjs/toolkit';

const account= createSlice({
  name: 'account',
  initialState: {
isLogin:false,
account:null,

},
  reducers: {
    setAccount: (state, action) => {
      state.account=action.payload.account;
      state.isLogin=true;
    },
    logOut: (state, action) => {
      state.account=null;
      state.isLogin=false;
      localStorage.removeItem('token')
    },

  },
});

export const { setAccount,logOut } = account.actions;

export default account.reducer;