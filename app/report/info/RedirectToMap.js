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
   <div className=' flex justify-center w-full'>
     <Button  color="warning" size='xs'  className='flex items-center' onClick={redirect} >
      
      <svg className='w-4 h-4 mx-1 fill-white' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>

      عرض الموقع على الخريطة
    </Button>
   </div>
  )
}

export default RedirectToMap