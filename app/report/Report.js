'use client'
import { swrReport } from "@/app/swr/report"

import Content from "./Content"
import Tabs from "./tabs/Tabs"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { setDetails, setReportId } from "../store/features/reports"

function Report() {
const dispatch=useDispatch()
    const { data, error, isLoading, mutate } = swrReport()
    
    if (isLoading) return 'loading'

    // if (data?.finish) return 'تم انهاء الحدث'

  if(data){
    if(data.finish){

      dispatch(setDetails({action:'showReport',data:false}))
      dispatch(setReportId(null))
    }
    return <>
<div className="  w-full">
<Tabs/>
<Content/>

</div>
</>
  }

    return null
}

export default Report
