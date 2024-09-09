import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { setReportId } from "../store/features/reports"

export default function SingleReport({data}) {
  const dispatch=useDispatch()
  const router=useRouter()

  return data.map(report=>{
    return <div className="bg-green-500 text-white text-center shadow-lg rounded-lg p-3 w-64 text-sm font-semibold" 
    onClick={() => {
      dispatch(setReportId(report.id))
      router.push(`./reports/${report.id}`)
    }
  }
     key={report.id}>
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
  })
}

