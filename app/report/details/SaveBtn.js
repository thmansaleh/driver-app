import { updateReport } from '@/app/services/updateReport'
import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

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
        // mutate()
      }
  return <Button onClick={update}>
    update
  </Button>
}

export default SaveBtn