"use client"
import { configureStore } from '@reduxjs/toolkit';

import reports from './features/reports';
import account from './features/account';
import plates from './features/plates';
import media from './features/media';
const store = configureStore({
    reducer: {
        reports:reports,
        account:account,
        plates:plates,
        media:media,
    },
  });
  
  export default store;