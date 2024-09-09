
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/add-url-image`

export const addUrlImage= async ( reportId,url ) => {
    // const token=localStorage.getItem('token')

   const response = await axios.get(url,{

//     headers: {
//       authorization: `${token}`
//   },
     params: { 
      report_id:reportId,
      url:url
    } });
   return response.data;
 };