"use client"
import { configureStore } from '@reduxjs/toolkit';

import reports from './features/reports';
import account from './features/account';
const store = configureStore({
    reducer: {
        reports:reports,
        account:account,
    },
  });
  
  export default store;