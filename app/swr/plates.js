'use client'

import axios from 'axios';

import useSWR from 'swr'

export function swrReportPlates(reportNo){
  const token=localStorage.getItem('token')

    const apiUrl='https://express-rta.vercel.app'
    const url =`${apiUrl}/report-plates`
  const fetcher = async () => {
   const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
  },
  params:{
    report_no:reportNo
  }
   });

   return response.data;
 };
const { data , error, isLoading,mutate } = useSWR(url, fetcher)
return {
  data,
  isLoading,
   error,
   mutate
}


}