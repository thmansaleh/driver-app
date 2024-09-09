import { setDetails } from "@/app/store/features/reports"
import { TextInput } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"
import SaveBtn from "./SaveBtn"

function Details() {
  const dispatch=useDispatch()
  const report=useSelector(state=>state.reports)
  // closeCount:null,
  // carsPosition:null,
  // description:null,
  // note:null,
  return (
<div className="space-y-3 p-3 text-sm">
 <table className="table-auto">
  <tbody class="space-y-12">
    <tr className="my-2">
      <td className="px-4"><span className="text-green-500 font-semibold">
              
             عدد المسارات المغلقة
             : 
              </span></td>
      <td className="py-2"> <TextInput value={report.closeCount}
             onChange={e=>dispatch(setDetails({action:'closeCount',data:e.target.value}))} 
            className="w-20"  type="number" /></td>
  
    </tr>
    <tr>
      <td className="px-4"><span className="text-green-500 font-semibold">
              
      مسار توقف المركبة
             : 
              </span></td>
      <td  className="py-2">  <TextInput 
               onChange={e=>dispatch(setDetails({action:'carsPosition',data:e.target.value}))} 

            value={report.carsPosition}
             className="w-20"  type="text" /></td>
  
    </tr>
    <tr>
      <td className="px-4"><span className="text-green-500 font-semibold">
              
      الوصف
             : 
              </span></td>
      <td className="py-2">     
            <TextInput
             value={report.description} 
             onChange={e=>dispatch(setDetails({action:'description',data:e.target.value}))} 
             className="w-full"  type="text" />
             </td>
  
    </tr>
    <tr className="">
      <td className="px-4  py-2"><span className="text-green-500 font-semibold">
              
      الملاحظات
             : 
              </span>
              </td>
      <td className="py-2">     
      <TextInput 
            value={report.note} 
            onChange={e=>dispatch(setDetails({action:'note',data:e.target.value}))} 
            className="w-full"  type="text" />
             </td>
  
    </tr>
  </tbody>
 </table>
 <SaveBtn/>
        
       

     
            {/* <Plates reportId={report.id}/> */}
            {/* <AddPlateModal reportId={report.id}/> */}

      </div>  )
}

export default Details