"use client"
import { useRouter } from 'next/navigation'
export default function BackArrowBtn({children}){




const router = useRouter()

const back = () => {
    
    router.back()
  }
return <div className='sticky z-50 w-full  top-0'>
  
<div className=" w-full h-10  flex items-center bg-white">
  <svg onClick={back}       className="h-5 w-5 mx-4 fill-gray-900 " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
</div>
{children}
  </div>

}