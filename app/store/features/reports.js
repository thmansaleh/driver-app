"use client"
import { createSlice } from '@reduxjs/toolkit';

const reports= createSlice({
  name: 'reports',
  initialState: {
    modalDispaly:false,
    page:null,
   
    addReport:{
        
        id:null,
        nida:'',
        reportNo:'',
        sourceId:'',
        typeId:'',
        start:'',
        arrive:'',
        finish:'',
        streetId:'',
        description:'',
        note:'',
        period:'',
 
    

    }
},
  reducers: {
    addReport: (state, action) => {
      state.currentDrivers=action.payload;
      state.drivers=action.payload;
      switch (action.payload.action) {
        case 'nida':
            state.addReport.nida=action.payload.data
            break;
        case 'reportNo':
            state.addReport.reportNo=action.payload.data
            break;
        case 'sourceId':
            state.addReport.sourceId=action.payload.data
            break;
        case 'typeId':
            state.addReport.typeId=action.payload.data
            break;
        case 'start':
            state.addReport.start=action.payload.data
            break;
        case 'arrive':
            state.addReport.arrive=action.payload.data
            break;
        case 'finish':
            state.addReport.finish=action.payload.data
            break;
        case 'streetId':
            state.addReport.streetId=action.payload.data
            break;
        case 'description':
            state.addReport.description=action.payload.data
            break;
  
        case 'note':
            state.addReport.note=action.payload.data
            break;
        case 'modalDispaly':
            state.modalDispaly=action.payload.data
            break;
        case 'page':
            state.page=action.payload.data
            break;
        case 'new':
            state.addReport=action.payload.data
            break;
      
        default:
            break;
      }
    },
 

  },
});

export const { addReport} = reports.actions;

export default reports.reducer;