
'use client'
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/verify-token`

  export const verifyToken= async () => {
const token =localStorage.getItem('token')

   const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
    }

 });
   return response.data;
 };