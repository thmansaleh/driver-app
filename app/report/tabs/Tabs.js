
import { useDispatch, useSelector } from 'react-redux';
import './styles.css'
import { setTab } from '@/app/store/features/reports';
import ChangeReportStatusModal from '../ChangeReportStatusModal';
import Details from './Details';
import { swrReport } from '@/app/swr/report';
import Media from './Media';
import Info from './Info';
import Vehicles from './Vehicles';
export default function Tabs() {
    const { data, error, isLoading, mutate } = swrReport()

  const dispatch=useDispatch()
  const tabName=useSelector(state=>state.reports.tab)
   
  if(data)  return <div className=" flex  bg-white border-b  z-20 sticky top-0 right-0 gap-x-3   text-gray-900 shaddow w-full  p-2  items-center ">

  <Info/>
  <Details/>
  <Vehicles/>
  <Media/>
  <ChangeReportStatusModal showBtn={true}/>
   
  </div>
}

