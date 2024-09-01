import { Spinner } from "flowbite-react"
import { swrDriverReports } from "../swr/driverReports"
import InformationModal from "./Modal"
import Table from "./Table"
import BackArrowBtn from "../components/BackArrowBtn"

function Reports() {
    const { data , isLoading } = swrDriverReports()
if(isLoading) return <div className=" fixed inset-0 flex justify-center items-center">
<Spinner color="success"  size='lg'/>
</div>
 if(data) {
    if(data.length==0) return <div className="fixed inset-0 flex justify-center items-center">
        <div className=" font-semibold text-gray-800">لاتوجد احداث</div>
    </div>
    return <>
 <div className="p-2 space-y-3">
   <BackArrowBtn>
   <div className="py-2 bg-green-400 text-sm font-semibold text-white text-center">الاحداث الأخيرة</div>

   </BackArrowBtn>
 {data.map(report=>{
        return <div className="flex justify-around py-2 text-sm font-semibold items-center gap-x-3 rounded-lg bg-gray-100 shadow-sm" key={report.id}>
<InformationModal report={report} />
<div>{report.source_name}</div>
<div>{report.report_type}</div>
        </div>
    })}
 </div>
    </>
 }

}

export default Reports