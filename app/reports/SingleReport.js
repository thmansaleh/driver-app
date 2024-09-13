import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { setDetails, setReportId } from "../store/features/reports"
import TwinkleAnimation from "./TwinkleAnimation"

export default function SingleReport({data}) {
  const dispatch=useDispatch()
  const router=useRouter()

  return data.map(report=>{
    return <div className="bg-green-500 flex items-center gap-x-10 text-white text-center   shadow-lg rounded-lg p-3  text-sm font-semibold" 
    onClick={() => {
      dispatch(setReportId(report.id))
      dispatch(setDetails({action:'modalStatusDisplay',data:true}))

      // router.push(`./reports/${report.id}`)
    }
  }
     key={report.id}>
<div>
<div>  
    رقم الحدث 
    :
     {report.report_no}
     </div>
<div>
    مصدر الحدث 
    :
    {report.source_name}

</div>
<div>
    نوع الحدث
    :
    {report.report_type}

</div>
</div>
<TwinkleAnimation/>
    </div>
  })
}

