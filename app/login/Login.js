'use client'
import { useRouter } from 'next/navigation'

import { useState ,useRef} from 'react';
import { useDispatch } from 'react-redux';
import { login  as loginCheck} from '../services/login';
import { setAccount } from '../store/features/account';

export default function Login(){
  const router = useRouter()

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const errorMsg=useRef()
  const loading=useRef()
  const dispatch=useDispatch()
  const login= async () => {

  if (username.length>0&&password.length>0) {

    errorMsg.current.innerText=''
loading.current.style.display='flex'

    const response = await loginCheck(username,password)

         if (response.auth) {
          
           localStorage.setItem('token',response.token)
          dispatch(setAccount({account:response.user}))

         } else {

          loading.current.style.display='none'

          errorMsg.current.innerText='المستخدم غير مسجل على الدوام'

         }

  } else {

    errorMsg.current.innerText='يرجئ أدخال اسم المستخدم وكلمة السر'
  }

 };


return <section className="select-none  ">
  <div className="flex flex-col items-center  justify-center px-6 py-8 text-gray-800   fixed inset-0">
    <div className="w-full md:w-1/3  rounded-lg shadow-2xl   ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1  className="text-md text-center font-bold leading-tight tracking-tight   mb-6">
       وحدة إدارة  الحوادث المرورية 
        </h1>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm   font-semibold">اسم المستخدم</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" name="username" id="email" className="focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 w-full  rounded-lg p-2.5" placeholder="" required />
          </div>
          <div>
            <label  className="block mb-2 text-sm font-medium ">كلمة المرور</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text"  placeholder="" className="focus:ring-gray-800 focus:border-gray-800 bg-gray-50 border border-gray-300 text-gray-900 w-full  rounded-lg p-2.5" required />
          </div>

          
       

          <div ref={loading} role="status" className='hidden flex justify-center py-4'>
    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>


          <span ref={errorMsg}  className="text-sm text-red-600 my-2 inline-block "></span>
          <button onClick={()=>login()} type="submit" className="w-full text-white bg-green-500   rounded-lg text-sm px-5 py-2.5 text-center ">تسجيل الدخول</button>

      </div>
    </div>
  </div>
</section>
}