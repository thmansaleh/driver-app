
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/update-report`
  export const updateReport= async ( id,carStopLine,closeLinesCount,description,note ) => {
    const token=localStorage.getItem('token')
   const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
  },
     params: { 
      id:id,
      cars_stop:carStopLine,
      close_lines_count:closeLinesCount,
      description:description,
      note:note
    } });
   return response.data;
 };