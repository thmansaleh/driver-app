'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function swrReportTypes(){
//  const url ="https://express-rta.vercel.app/get-types"
 const url =`${apiUrl}/get-types`

  const fetcher = async () => {
   const response = await axios.get(url);

   return response.data;
 };
const { data , error, isLoading } = useSWR(url, fetcher)
return {
  data,
  isLoading,
   error
}


}