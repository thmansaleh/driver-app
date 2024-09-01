
"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import PlatesModal from "./PlatesModal";
import { updateReport } from "../services/updateReport";
import Plates from "./Plates";

export default function InformationModal ({report}) {
  const [openModal, setOpenModal] = useState(false);
  // const [streetId, setStreetId] = useState('');
  const [carStopLine, setCarStopLine] = useState('');
  const [closeLinesCount, setCloseLinesCount] = useState('');
  const [description, setDescription] = useState(report.description);
  const [note, setNote] = useState('');
const update=async()=>{
  const data = await updateReport(report.id,carStopLine,closeLinesCount,description,note)
  // console.log(report.id,carStopLine,closeLinesCount,description,note)
  setOpenModal(false)
}
  return (
    <>
   <div onClick={() => setOpenModal(true)}  className="text-green-500">{report.report_no}</div>

       

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
      <div className="space-y-3 text-sm">
      <div className="text-center font-semibold">
        <span className="text-green-500 font-semibold">

        رقم الحدث
        </span>
        
        : {report.report_no}</div>

      <div>
        <span className="text-green-500 font-semibold">

         التاريخ
        </span>
         : {new Date(report.date).toLocaleString()}</div>
          <div> <span className="text-green-500 font-semibold">الفترة</span>: {report.period}</div>
          <div> <span className="text-green-500 font-semibold">
            الدورية
            </span>
            : {report.nida}</div>
            
          <div>
            <span className="text-green-500 font-semibold">

            نوع الحدث
            </span>
            
            : {report.report_type}</div>
          <div>
            <span className="text-green-500 font-semibold">
              
            مصدر الحدث
            </span>
            
            : {report.source_name}</div>
          <div className="flex justify-center items-center text-xs gap-x-4 font-semibold bg-gray-100 rounded-lg py-3 shadow-md">
          <div>الاستلام: {report.start}</div>
          <div>الوصول: {report.arrive}</div>
          <div>الانتهاء: {report.finish}</div>
          </div>


          <div>
            <span className="text-green-500 font-semibold">
              
            الشارع
            </span>
            
            : {report.street_name}</div>


          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            عدد المسارات المغلقة
            </span>
            
            :
            <TextInput defaultValue={report.close_lines_count} onChange={e=>setCloseLinesCount(e.target.value)} className="w-20"  type="number" />
            </div>

     
          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            مسار توقف المركبة
            </span>
            
            :
            <TextInput defaultValue={report.cars_stop} onChange={e=>setCarStopLine(e.target.value)} className="w-20"  type="text" />
            </div>


            <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            الوصف
            </span>
            
            :
            <TextInput defaultValue={description} onChange={e=>setDescription(e.target.value)} className="w-full"  type="text" />
            </div>

        
          <div>
            <span className="text-green-500 font-semibold">
              
            ملاحظات العمليات
            </span>
            
            : {report.note_police}
            </div>
            
            <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            الملاحظات
            </span>
            
            :
            <TextInput defaultValue={report.note}  onChange={e=>setNote(e.target.value)} className="w-36"  type="text" />
            </div>
            <Plates reportNo={report.report_no}/>
            <PlatesModal report={report}/>

      </div>
   </Modal.Body>
   <Modal.Footer>
          <Button onClick={update}>تحديث</Button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}


