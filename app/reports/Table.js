import InformationModal from "./Modal"

export default function Table({data}) {
  // console.log('from table',data)
  // return 'grg'
  return <div className="relative overflow-auto max-h-svh  shadow-md ">
  <table className="w-full text-sm text-center  text-gray-500 ">
    <thead className="text-xs text-white uppercase bg-gray-600 ">
      <tr>
        <th scope="col" className="px-6 py-3">
          رقم الحدث
        </th>
        <th scope="col" className="px-6 py-3">
          مصدر الحدث
        </th>
        <th scope="col" className="px-6 py-3">
          نوع الحدث
        </th>
        <th scope="col" className="px-6 py-3">
          الدورية
        </th>
        <th scope="col" className="px-6 py-3">
          الاستلام
        </th>
        <th scope="col" className="px-6 py-3">
          الوصول
        </th>
        <th scope="col" className="px-6 py-3">
          الانتهاء
        </th>
        <th scope="col" className="px-6 py-3">
          التاريخ
        </th>
        <th scope="col" className="px-6 py-3">
          ملاحظات
        </th>
      </tr>
    </thead>
    <tbody>
    {data.map(report=>{
        return   <tr key={report.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
     
        <InformationModal report={report}/>
    
        <td className="px-6 py-4">
        {report.source_name}
        </td>
        <td className="px-6 py-4">
        {report.report_type}
        </td>
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {report.nida}

        </td>
        <td className="px-6 py-4">
        {report.start}
        </td>
        <td className="px-6 py-4">
        {report.arrive}
        </td>
        <td className="px-6 py-4">
        {report.finish}
        </td>
        <td className="px-6 py-4">
        {
new Date(report.date).toLocaleString()

          
        }
        </td>
        <td className="px-6 py-4">
        {report.note_police}
    </td>
      </tr>
    })}
     
    </tbody>
  </table>
</div>  
}

