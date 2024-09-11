// import { addPlate } from "@/app/services/addPlate"
import { addPlate  as savePlateToDb} from "@/app/services/addPlate"
import { addPlate } from "@/app/store/features/plates"
import { swrReportPlates } from "@/app/swr/plates"
import { Button } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"

function AddPlateBtn() {
    const plate=useSelector(state=>state.plates)
    const reportId =useSelector(state=>state.reports.reportId)
    const { mutate } = swrReportPlates()
    const dispatch=useDispatch()


    const add= async()=>{
       
          const data=await savePlateToDb(reportId,plate.plateNo,plate.source,plate.carTypeId,plate.isRemoved,plate.recoveryNo)
          dispatch(addPlate({action:'modal',data:false}))
  mutate()
// console.log(plate)
    }
  return (
    <Button onClick={add}>اضافة</Button>
)
}

export default AddPlateBtn