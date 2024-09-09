"use client"
import { createSlice } from '@reduxjs/toolkit';

const plates= createSlice({
  name: 'plates',
  initialState: {
    reportId:null,
    plateNo:null,
    source:null,
    carTypeId:null,
    isRemoved:null,
    modal:false
   
  
},
  reducers: {
    addPlate: (state, action) => {
      switch (action.payload.action) {
        case 'reportId':
            state.reportId=action.payload.data
            break;
        case 'plateNo':
            state.plateNo=action.payload.data
            break;
        case 'source':
            state.source=action.payload.data
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

export const { addPlate} = plates.actions;

export default plates.reducer;