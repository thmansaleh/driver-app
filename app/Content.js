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
import ChangeReportStatusModal from './report/ChangeReportStatusModal'

 function  Content({children}) {
  const dispatch=useDispatch()
  const router=useRouter()
  const isLogin =useSelector(state=>state.account.isLogin)
  const reportId=useSelector(state=>state.reports.reportId)
  const showReport=useSelector(state=>state.reports.showReport)

 
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
   if(showReport) return<>
    <Tracking/>
    <Report/>
    <ChangeReportStatusModal showBtn={false}/>

   </>
 return  <>
 <Tracking/>
  {children}
 <ChangeReportStatusModal showBtn={false}/>
  </>
  // if(isLogin)return  <> {children}</>

}

export default Content