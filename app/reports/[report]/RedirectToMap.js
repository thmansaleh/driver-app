import { Button } from 'flowbite-react'
import { useRouter } from 'next/navigation'

function RedirectToMap({lat,lng}) {
  const router=useRouter()
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  return (
    <Button gradientMonochrome="success" size='sm' onClick={()=>router.push(url)} className=' text-white text-sm my-3 inline-block    '  >عرض الموقع على الخريطة</Button>
  )
}

export default RedirectToMap