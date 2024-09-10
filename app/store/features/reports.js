"use client"
import { createSlice } from '@reduxjs/toolkit';

const reports= createSlice({
  name: 'reports',
  initialState: {
    modalDispaly:false,
    page:null,
    tab:'info',
    reportId:null,
    closeCount:null,
    carsPosition:null,
    description:null,
    note:null,
    showReport:false,
    modalStatusDisplay:false,

   

},
  reducers: {
    setDetails: (state, action) => {
      switch (action.payload.action) {
        case 'closeCount':
            state.closeCount=action.payload.data
            break;
        case 'carsPosition':
            state.carsPosition=action.payload.data
            break;
        case 'description':
            state.description=action.payload.data
            break;
        case 'note':
            state.note=action.payload.data
            break;
        case 'showReport':
            state.showReport=action.payload.data
            break;
        case 'modalStatusDisplay':
            state.modalStatusDisplay=action.payload.data
            break;
      
     
      
        default:
            break;
      }
    },
    setTab: (state, action) => {
       state.tab=action.payload
      },
    setReportId: (state, action) => {
       state.reportId=action.payload
      },
   
 

  },
});

export const { setDetails,setTab,setReportId} = reports.actions;

export default reports.reducer;