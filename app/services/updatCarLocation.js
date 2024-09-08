
import axios from 'axios';
import { apiUrl } from '../constants';
const url =`${apiUrl}/update-car-location`

  export const updatCarLocation= async (nida,lat,lng) => {
   const response = await axios.get(url,{
     params: {
        nida:nida,
        lat:lat,
        lng:lng,
      } });
   return response.data;
 };