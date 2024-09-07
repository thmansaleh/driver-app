import { addPlate } from "@/app/store/features/plates"
import { TextInput } from "flowbite-react"
import { useDispatch } from "react-redux"

function Source() {
    const dispatch=useDispatch()
 return   <div className="flex gap-x-3  items-center">
    <span className="text-green-500 font-semibold">
      
مصدر  المركبة            </span>
    
    :
    <TextInput onChange={(e)=>dispatch(addPlate({action:'source',data:e.target.value}))} className="w-28"  type="text" />
    </div>
}

export default Source