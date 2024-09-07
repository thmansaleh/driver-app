'use client'

import axios from 'axios';

import useSWR from 'swr'
import { apiUrl } from '../constants';

export function swrCarsType(){
  const token=localStorage.getItem('token')

    const url =`${apiUrl}/get-cars-type`
  const fetcher = async () => {
   const response = await axios.get(url,{
    headers: {
      authorization: `${token}`
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