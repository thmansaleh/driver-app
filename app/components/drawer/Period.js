import { useSelector } from "react-redux"

function Period() {
    const account =useSelector(state=>state.account.account)

  return (
     <div className="flex items-center gap-x-3">
      <svg className="w-5 h-5 fill-gray-500" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32z"></path></svg>
     <div>
      الفترة
      :
      {' '}
      {account.period}</div>
     </div>
   
  )
}

export default Period