'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function swrSources(){
//  const url ="https://express-rta.vercel.app/get-sources"
 const url =`${apiUrl}/get-sources`

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