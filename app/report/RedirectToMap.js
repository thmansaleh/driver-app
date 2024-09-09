import { Button } from 'flowbite-react'
import { useRouter } from 'next/navigation'

function RedirectToMap({lat,lng}) {
  const router=useRouter()
  
  const redirect=()=>{
    let random = Math.random()
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&random=${random}`
    router.push(url)

  }
  return (
    <Button className="  w-full" gradientMonochrome="success" size='sm'  onClick={redirect} >عرض الموقع على الخريطة</Button>
  )
}

export default RedirectToMap