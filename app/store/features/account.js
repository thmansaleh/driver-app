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
    }

  },
});

export const { setAccount } = account.actions;

export default account.reducer;