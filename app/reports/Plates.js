import { swrReportPlates } from '../swr/plates'
import { Button } from 'flowbite-react'
import { DeleteModal } from './DeleteModal'

function Plates({reportNo}) {
    const { data , error, isLoading } = swrReportPlates(reportNo)

if(isLoading) return 'loading......'
if(data){
    if(data.length==0) return 'لاتوجد مركبات'
    return <div>
        <div className='text-sm font-semibold  s text-green-500 my-2'>المركبات</div>
        {data.map(plate=>{
        return <div key={plate.id} className='flex items-center  my-3 gap-x-5'>
            <div className='flex items-center gap-x-3 shadow-lg border p-2 w-fit rounded-lg'>
        <div>{plate.plate_no}</div>
        <div>{plate.plate_source}</div>

    </div>
    <DeleteModal reportNo={reportNo} id={plate.id}/>
            </div>
    })}
    </div>
}
return null
}

export default Plates