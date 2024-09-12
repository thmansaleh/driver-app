// import { addPlate } from "@/app/services/addPlate"
import { addPlate  as savePlateToDb} from "@/app/services/addPlate"
import { addPlate } from "@/app/store/features/plates"
import { swrReportPlates } from "@/app/swr/plates"
import { Button } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify';

function AddPlateBtn() {
    const plate=useSelector(state=>state.plates)
    const reportId =useSelector(state=>state.reports.reportId)
    const { mutate } = swrReportPlates()
    const dispatch=useDispatch()


    const add= async()=>{
       if(reportId&&plate.plateNo&&plate.source&&plate.carTypeId&&plate.isRemoved){

          const data=await savePlateToDb(reportId,plate.plateNo,plate.source,plate.carTypeId,plate.isRemoved,plate.recoveryNo)
          dispatch(addPlate({action:'modal',data:false}))
          toast.success('تم اضافة مركبة جديدة', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            }); 
  mutate()
// console.log(plate)
    }else{
      toast.warn('يرجئ ادخال جميع البيانات', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });    }
  }
  return <>
    <Button onClick={add}>اضافة</Button>
    {/* <ToastContainer /> */}

  </>

}

export default AddPlateBtn