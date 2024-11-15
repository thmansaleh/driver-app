import { swrReport } from "@/app/swr/report"
import { useSelector } from "react-redux"
import RedirectToMap from "./RedirectToMap"
import ReportLocation from "./ReportLocation"
import TimeAndDistance from "./TimeAndDistance"

function Info() {
  const { data, error, isLoading, mutate } = swrReport()

   if(data) return <div className='bg-gray-1003 text-center space-y-3 text-sm flex font-semibold p-3 flex-col text-gray-900 flex-1'>
            <div className="bg-gray-200 text-center rounded-lg py-2 px-3 text-sm text-green-600 font-bold">
                رقم الحدث : {data.report_no}
            </div>

            <div className="space-y-2">
                <div> وقت إنشاء الحدث : {new Date(data.date).toLocaleTimeString()}</div>
                <div> نوع الحدث : {data.type}</div>
                <div> مصدر الحدث : {data.source_name}</div>
                <div> الشارع : {data.street_name}</div>
                <div> الوصف : {data.description}</div>
                <div> الملاحظات : {data.note_police}</div>
                <div> موقع الحدث : {data.location_name}</div>
<TimeAndDistance report={data}/>
<RedirectToMap lat={data.lat} lng={data.lng}/> 
</div> 
</div> 
}

export default Info