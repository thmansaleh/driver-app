
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/driver-login`

  export const login= async (username,password) => {
   const response = await axios.get(url,{

     params: {
       username:username,
       password:password,

       
      } });
   return response.data;
 };