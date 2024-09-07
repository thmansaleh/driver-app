// import { addPlate } from "@/app/services/addPlate"
import { addPlate  as savePlateToDb} from "@/app/services/addPlate"
import { Button } from "flowbite-react"
import { useSelector } from "react-redux"

function AddPlateBtn({reportId}) {
    const plate=useSelector(state=>state.plates)
    const add= async()=>{
        // {
        //     "reportId": null,
        //     "plateNo": "we2344",
        //     "source": null,
        //     "carTypeId": "2",
        //     "isRemoved": "لا"
        // }
          const data=await savePlateToDb(reportId,plate.plateNo,plate.source,plate.carTypeId,plate.isRemoved)
//   setOpenModal(false)
//   mutate()
console.log(plate)
    }
  return (
    <Button onClick={add}>اضافة</Button>
)
}

export default AddPlateBtn