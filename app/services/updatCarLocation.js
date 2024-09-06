
import axios from 'axios';
//  const url ="https://express-rta.vercel.app/delete-user-from-cars-histpry"
const apiUrl='https://express-rta.vercel.app'

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