import { updateReport } from '@/app/services/updateReport'
import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

function SaveBtn() {
    const report =useSelector(state=>state.reports)
    // reportId:null,
    // closeCount:null,
    // carsPosition:null,
    // description:null,
    // note:null,
    const update=async()=>{
        const data = await updateReport(report.reportId,report.carsPosition,report.closeCount,report.description,report.note)
        // setOpenModal(false)
        toast.success('تم التحديث بنجاح ', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
        // mutate()
      }
  return <Button  gradientMonochrome="success"  size='sm' onClick={update}>
    تحديث
  </Button>
}

export default SaveBtn