import { useRouter } from "next/navigation"

export default function Table({data}) {
  // return 'grg'
  const router=useRouter()
  return <div className="relative overflow-auto max-h-svh  shadow-md ">
  <table className="w-full text-sm text-center  text-gray-500 ">
 
    <tbody>
    {data.sort((a,b)=>a.id - b.id).map(report=>{
        return   <tr key={report.id} className="">
     <td onClick={() => router.push(`./reports/${report.id}`)} className="text-green-500  font-semibold  py-4">
   {report.report_no}
        </td>
    
        <td className=" py-4">
        {report.source_name}
        </td>
        <td className=" py-4">
        {report.report_type}
        </td>
      
     
      </tr>
    })}
     
    </tbody>
  </table>
</div>  
}

