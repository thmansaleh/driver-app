
'use client'
import axios from 'axios';
import useSWR from 'swr'

export function swrDriverReports(){
    // const token=localStorage.getItem('token')
  
 const url ="https://express-rta.vercel.app/get-driver-reports-today"
  const fetcher = async () => {
    const token=localStorage.getItem('token')
   const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
  },
   });

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetcher,{
  refreshInterval:2000
})
return {
  data,
  isLoading,
   error
}


}