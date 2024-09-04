import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

function RedirectToMap({lat,lng}) {
    const url = `https://google.com/maps?q=${lat},${lng}`
  return (
    <Link className='p-1 text-white my-3 inline-block bg-blue-600 w-full rounded-lg ' href={url} >عرض الموقع على الخريطة</Link>
  )
}

export default RedirectToMap