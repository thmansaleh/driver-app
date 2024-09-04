import  { useEffect } from 'react'

function ReportLocation({location}) {

  return (
<div className='flex gap-x-3  items-center'> 
    موقع الحدث 
    : 
    {location}
    {/* <svg className='w-5 h-5 fill-red-700' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg> */}

</div>
  )
}

export default ReportLocation