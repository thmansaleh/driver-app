"use client"
import { createSlice } from '@reduxjs/toolkit';

const media= createSlice({
  name: 'media',
  initialState: {
    file:null,
    progress:0,
    downloadURLs:[],
    carTypeId:null,
    isRemoved:null,
    modal:false
   
  
},
  reducers: {
    setMedia: (state, action) => {
      switch (action.payload.action) {
        case 'setFile':
            state.file=action.payload.data
            break;
        case 'setProgress':
            state.progress=action.payload.data
            break;
        case 'setDownloadURLs':
            state.downloadURLs=action.payload.data
            break;
        case 'carTypeId':
            state.carTypeId=action.payload.data
            break;
        case 'isRemoved':
            state.isRemoved=action.payload.data
            break;
        case 'modal':
            state.modal=action.payload.data
            break;

      
        default:
            break;
      }
    },
 

  },
});

export const { setMedia} = media.actions;

export default media.reducer;