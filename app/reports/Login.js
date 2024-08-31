import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

function Login() {
    const router=useRouter()
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const [massege,setMassege]=useState(false)
    const sinIn= async()=>{
if(username.length>3 & password.length>3){
    const url =`https://express-rta.vercel.app/get-driver?id=${username}`
    const response = await axios.get(url)
  const user= response.data
  if(user.length>0){
router.push(`?job_id=${username}`)
  }else{
setMassege('اسم المستخدم غير موحود')
  }
  console.log(user)

}else{
    setMassege('ادخل الرقم المالي وكلمة المرور')

}

    }
  return (
  <div className="fixed inset-0 bg-gray-100 flex justify-center items-center">
      <div className=" ">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الرقم المالي</label>
    <input onChange={e=>setUsername(e.target.value)} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"  />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">كلمة المور</label>
    <input onChange={e=>setPassword(e.target.value)}  type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>
  {massege&&<div className="text-sm text-red-500 my-3">{massege}</div>}

  <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={sinIn}>دخول</button>
    </div>
  </div>
  )
}

export default Login