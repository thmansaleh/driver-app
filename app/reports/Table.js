import InformationModal from "./Modal"

export default function Table({data}) {
  // return 'grg'
  return <div className="relative overflow-auto max-h-svh  shadow-md ">
  <table className="w-full text-sm text-center  text-gray-500 ">
 
    <tbody>
    {data.map(report=>{
        return   <tr key={report.id} className="">
     
        <InformationModal report={report}/>
    
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

