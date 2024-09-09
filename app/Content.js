import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import { verifyToken } from './services/verifyToken'
// import { setAccount } from './store/features/account'
import { useRouter } from 'next/navigation'
import Login from './login/Login'
import { verifyToken } from './services/verifyToken'
import { setAccount } from './store/features/account'
import Tracking from './components/tracking/Tracking'
import Report from './report/Report'

 function  Content({children}) {
  const dispatch=useDispatch()
  const router=useRouter()
  const isLogin =useSelector(state=>state.account.isLogin)
  const reportId=useSelector(state=>state.reports.reportId)

 
    useEffect(() => {
    const token =localStorage.getItem('token')
if(token){
  
  const verivey = async ()=>{
     const data= await verifyToken()
     if(data.status){
      dispatch(setAccount({account:data.user}))
     }
     return data
  }
  verivey()
}

      return () => {
        null
      }
    }, [])
    
   if(!isLogin) return <Login/>
   if(reportId) return <Report/>
 return  <>
 <Tracking/>
  {children}
  </>
  // if(isLogin)return  <> {children}</>

}

export default Content