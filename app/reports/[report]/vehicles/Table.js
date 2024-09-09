import { swrReportPlates } from '@/app/swr/plates'
import React from 'react'
import DeletePlateModal from './DeletePlateModal'

function Table() {
    const { data, error, isLoading, mutate } = swrReportPlates()

 if(data){
    if(data.length==0) return <div className=" text-gray-800  text-center  my-7 text-xs font-semibold">لاتوجد مركبات</div>
    return (
        <div>
            <table className="  w-full text-xs    font-semibold rounded-lg shadow-lg">
                <thead className="  bg-gray-100 text-ray-700 rounded-lg   border-b ">
                  <tr className="  text-center">
                    <td className="py-2">رقم المركبة</td>
                    <td>مصدر المركبة</td>
                    <td>نوع المركبة</td>
                    <td>تم ازاحتها بواسطة كرين المواصلات   (نعم,لا)</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                {data.map(car=>{
                  return   <tr className=" text-center " key={car.source}>
                  <td className="py-2">{car.plate_no}</td>
                  <td>{car.plate_source}</td>
                  <td>{car.type}</td>
                  <td>{car.is_removed}</td>
                  <td><DeletePlateModal id={car.id}/></td>
                </tr>
                })}
                </tbody>
              </table>
        </div>
      )
 }
 
}

export default Table