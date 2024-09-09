import { setDetails } from "@/app/store/features/reports"
import { TextInput } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"

function Details() {
  const dispatch=useDispatch()
  const report=useSelector(state=>state.reports)
  // closeCount:null,
  // carsPosition:null,
  // description:null,
  // note:null,
  return (
<div className="space-y-3 p-3 text-sm">
          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            عدد المسارات المغلقة
            </span>
            
            :
            <TextInput value={report.closeCount}
             onChange={e=>dispatch(setDetails({action:'closeCount',data:e.target.value}))} 
            className="w-20"  type="number" />
            </div>

     
          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            مسار توقف المركبة
            </span>
            
            :
            <TextInput 
               onChange={e=>dispatch(setDetails({action:'carsPosition',data:e.target.value}))} 

            value={report.carsPosition}
             className="w-20"  type="text" />
            </div>


            <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            الوصف
            </span>
            
            :
            <TextInput
             value={report.description} 
             onChange={e=>dispatch(setDetails({action:'description',data:e.target.value}))} 
             className="w-full"  type="text" />
            </div>

     
            <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            الملاحظات
            </span>
            
            :
            <TextInput 
            value={report.note} 
            onChange={e=>dispatch(setDetails({action:'note',data:e.target.value}))} 
            className="w-36"  type="text" />
            </div>
            {/* <Plates reportId={report.id}/> */}
            {/* <AddPlateModal reportId={report.id}/> */}

      </div>  )
}

export default Details