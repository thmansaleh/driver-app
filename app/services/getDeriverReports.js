
'use client'

import axios from 'axios';
import { apiUrl } from '../constants';
export const getDriverReports= async (startDate,endDate) => {
  const token=localStorage.getItem('token')

    const url =`${apiUrl}/get-reports-by-job-id`
    let end = new Date(endDate); 
end.setDate(end.getDate() + 1);
    let start = new Date(startDate); 
startDate.setDate(start.getDate() + 1);
   const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
  },
     params: {
       start_date:start,
       end_date:end

      } });

   return response.data;
 };