import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

function RedirectToMap({lat,lng}) {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  return (
    <Link className='p-1 text-white my-3 inline-block bg-blue-600 w-full rounded-lg ' href={url} >عرض الموقع على الخريطة</Link>
  )
}

export default RedirectToMap