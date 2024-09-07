import { addPlate } from '@/app/store/features/plates'
import { swrCarsType } from '@/app/swr/carsType'
import { Select } from 'flowbite-react'
import { useDispatch } from 'react-redux'

function CarsType() {
    const { data , error, isLoading,mutate } = swrCarsType()
const dispatch=useDispatch()
  if(data)return <div className="flex gap-x-3  items-center">
  <span className="text-green-500 font-semibold">
    
  نوع المركبة            </span>
  
  :
<Select onChange={(e)=>dispatch(addPlate({action:'carTypeId',data:e.target.value}))} className="flex-1">
{data.map(car=>{
    return <option value={car.id} key={car.id}>{car.type}</option>
})}
  </Select>
  </div>
}

export default CarsType