
"use client";

import { Button, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { updateReport } from "../../services/updateReport";
import Plates from "./Plates";
import { swrReport } from "@/app/swr/report";
import AddPlateModal from "../[report]/vehicles/AddPlateModal";

export default function ReportDetailsModal ({report}) {
  const [openModal, setOpenModal] = useState(false);
  const { mutate } = swrReport(report.id)
  const [carStopLine, setCarStopLine] = useState('');
  const [closeLinesCount, setCloseLinesCount] = useState('');
  const [description, setDescription] = useState(report.description);
  const [note, setNote] = useState('');
const update=async()=>{
  const data = await updateReport(report.id,carStopLine,closeLinesCount,description,note)
  setOpenModal(false)
  mutate()
}
  return (
    <>
   <Button gradientMonochrome="success" size='sm' onClick={() => setOpenModal(true)} className=" ">
 ادخل تفاصيل الحدث
        </Button>
       

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
      <div className="space-y-3 text-sm">
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

     
            <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            الملاحظات
            </span>
            
            :
            <TextInput defaultValue={report.note}  onChange={e=>setNote(e.target.value)} className="w-36"  type="text" />
            </div>
            <Plates reportId={report.id}/>
            <AddPlateModal reportId={report.id}/>

      </div>
   </Modal.Body>
   <Modal.Footer>
          <Button onClick={update}>تحديث</Button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}


