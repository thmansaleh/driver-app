
import axios from 'axios';
import { apiUrl } from '../constants';
import { getCurrentTime } from './helpers/getCurrentTime';
// const apiUrl='https://express-rta.vercel.app'
const url =`${apiUrl}/change-report-status`

export const changeReportState= async ( id,action ) => {
    // const token=localStorage.getItem('token')

   const response = await axios.get(url,{

//     headers: {
//       authorization: `${token}`
//   },
     params: { 
        id:id,
         action:action, 
         time:getCurrentTime()
    } });
   return response.data;
 };