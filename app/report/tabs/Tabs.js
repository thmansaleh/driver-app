
import { useDispatch, useSelector } from 'react-redux';
import './styles.css'
import { setTab } from '@/app/store/features/reports';
import ChangeReportStatusModal from '../ChangeReportStatusModal';
export default function Tabs() {
  const dispatch=useDispatch()
  const tabName=useSelector(state=>state.reports.tab)
    const data =[
        {
            title:'الحدث',
            tab:'info',
            icon:<svg  className="h-4 w-4 flex-shrink-0" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>        },
      
        {
            title:'التفاصيل',
            tab:'details',
            icon:<svg className="h-4 w-4 flex-shrink-0" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M48 82.7v346.7c0 19.1 15.5 34.7 34.7 34.7h346.7c19.1 0 34.7-15.5 34.7-34.7V82.7c0-19.1-15.5-34.7-34.7-34.7H82.7C63.5 48 48 63.5 48 82.7zm89.3 297.1c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zM384.7 374h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14z"></path></svg>        },
      
        {
            title:'المركبات',
            tab:'vehicles',
            icon:   <svg className="h-4 w-4 flex-shrink-0" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 480 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M438.66 212.33l-11.24-28.1-19.93-49.83C390.38 91.63 349.57 64 303.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4l-19.93 49.83-11.24 28.1C17.22 221.5 0 244.66 0 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-27.34-17.22-50.5-41.34-59.67zm-306.73-54.16c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L368 208H112l19.93-49.83zM80 319.8c-19.2 0-32-12.76-32-31.9S60.8 256 80 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S380.8 256 400 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg>
        },
      
        {
            title:'الصور',
            tab:'media',
            icon:
            <svg className="h-4 w-4 flex-shrink-0"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"></path></svg>
        },
    
       
    ]
    return <div className=" flex  bg-white border-b  z-20 sticky top-0 right-0 gap-x-3   text-gray-900 shaddow w-full  p-2  items-center ">

{  data.map(tab=>{
        return  <div className=""  key={tab.tab}>
  
<input defaultChecked={tab.tab=='info'?true:false} className="hidden tabs" type="radio" id={tab.tab} name="tabs"/>  
<label htmlFor={tab.tab} >
<div onClick={e=>{
    dispatch(setTab(tab.tab))
}}   className="flex cursor-pointer ring-1 ring-gray-200  px-4  items-center gap-x-2 rounded-lg p-[7px]">
{tab.icon}
<div className="text-sm font-semibold text-gray-800">{tab.title}</div>
</div>
    
</label>
</div>  
  })}
  <ChangeReportStatusModal showBtn={true}/>
   
  </div>
}

