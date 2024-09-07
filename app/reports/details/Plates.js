import { swrReportPlates } from '../../swr/plates'
import { Button } from 'flowbite-react'
import DeletePlateModal from './DeletePlateModal'

function Plates({reportId}) {
    const { data , error, isLoading } = swrReportPlates(reportId)

if(isLoading) return 'loading......'
if(data){
    if(data.length==0) return 'لاتوجد مركبات'
    return <div>
        <div className='text-sm font-semibold  s text-green-500 my-2'>المركبات</div>
        {data.map(plate=>{
        return <div key={plate.plate_no} className='flex items-center  my-3 gap-x-5'>
            <div className='flex items-center gap-x-3 shadow-lg border p-2 w-fit rounded-lg'>
        <div>{plate.plate_no}</div>
        <div>{plate.plate_source}</div>

    </div>
    <DeletePlateModal  id={plate.id}/>
            </div>
    })}
    </div>
}
return null
}

export default Plates