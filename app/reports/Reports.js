import { Spinner } from "flowbite-react"
import { swrDriverReports } from "../swr/driverReports"
import InformationModal from "./details/ReportDetailsModal"
import Table from "./Table"
import BackArrowBtn from "../components/BackArrowBtn"
import SingleReport from "./SingleReport"
import { useDispatch } from "react-redux"

function Reports() {
    const { data , isLoading } = swrDriverReports()
if(isLoading) return <div className=" fixed inset-0 flex justify-center items-center">
<Spinner color="success"  size='lg'/>
</div>
 if(data) {
    if(data.length==0) return <div className=" flex justify-center items-center">
        <div className=" font-semibold  text-gray-800">لاتوجد احداث</div>
    </div>
    return <>
 <div className="p-2 space-y-3">
  
   {/* <Table data={data}/> */}
   <SingleReport data={data}/>

 </div>
    </>
 }

}

export default Reports