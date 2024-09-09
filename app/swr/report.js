'use client'

import axios from 'axios';

import useSWR from 'swr'
import { useSelector } from 'react-redux';
import { apiUrl } from '../constants';

export function swrReport(){
  const reportId=useSelector(state=>state.reports.reportId)

const url =`${apiUrl}/get-report?id=${reportId}`

  const fetcher = async () => {
    // const token=localStorage.getItem('token')

   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading,mutate } = useSWR(url, fetcher,{
//   headers: {
//     authorization: `${token}`
// },
})
return {
  data,
  isLoading,
   error,
   mutate
}


}