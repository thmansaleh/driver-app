
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/add-plate`

export const addPlate= async ( reportId,plateNo,source,carTypeId,isRemoved,recoveryNo ) => {
    const token=localStorage.getItem('token')

   const response = await axios.get(url,{

    headers: {
      authorization: `${token}`
  },
     params: { 
      report_id:reportId,
      plate_no:plateNo,
      plate_source:source,
      car_type_id:carTypeId,
      is_removed:isRemoved,
      recovery_no:recoveryNo
    } });
   return response.data;
 };