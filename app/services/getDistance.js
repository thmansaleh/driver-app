
import axios from 'axios';
import { apiUrl } from '../constants';
// const url =`${apiUrl}/delete-plate`
const url ='https://maps.googleapis.com/maps/api/distancematrix/json'

export const getDistance= async (  ) => {
    // const token=localStorage.getItem('token')
   const response = await axios.get(url,{
     params: { 
        origins:'25.381886,55.460038',
        destinations:'24.453884,54.377343',
        mode:'driving',
        key:'AIzaSyAVK3azJSUF6m30MT4P1atQtggJJWn4XHA',
    } });
    console.log(response.data)
    return response.data;
};
