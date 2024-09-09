'use client'

import axios from 'axios';
import { useSelector } from 'react-redux';

import useSWR from 'swr'

export function swrReportPlates(){
  const token=localStorage.getItem('token')
const reportId=useSelector(state=>state.reports.reportId)
    const apiUrl='https://express-rta.vercel.app'
    const url =`${apiUrl}/report-plates`
  const fetcher = async () => {
   const response = await axios.get(url,{

    headers: {
      authorization: `${token}`
  },
  params:{
    id:reportId
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