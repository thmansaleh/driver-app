
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/delete-plate`

export const deletePlate= async ( id ) => {
    const token=localStorage.getItem('token')
   const response = await axios.get(url,{

    headers: {
      authorization: `${token}`
  },
     params: { 
        id:id
    } });
   return response.data;
 };