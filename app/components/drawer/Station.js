import { Button } from "flowbite-react"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

function Station() {
    const account =useSelector(state=>state.account.account)
    const router=useRouter()
  
    const redirect=()=>{
      let random = Math.random()
      const url = `https://www.google.com/maps/search/?api=1&query=${account.lat},${account.lng}&random=${random}`
      router.push(url)
  
    }
  return (
     <div className="flex items-center gap-x-3">
        <svg className="w-5 h-5 fill-gray-500" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
     <div>
        التمركز
        
        :
        {' '}

        {account.station}
        </div>

        <Button className="" gradientMonochrome="success" size='xs'  onClick={redirect} >عرض الموقع </Button>

     </div>
   
  )
}

export default Station