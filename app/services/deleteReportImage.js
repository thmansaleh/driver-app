
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/delete-url-image`

export const deleteReportImage= async ( imgUrl ) => {
    // const token=localStorage.getItem('token')

   const response = await axios.get(url,{

//     headers: {
//       authorization: `${token}`
//   },
     params: { 
      url:imgUrl
    } });
   return response.data;
 };