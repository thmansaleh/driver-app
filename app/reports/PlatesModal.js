
"use client";

import { Button, Label, Modal, Radio, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { addPlate } from "../services/addPlate";
import { swrReportPlates } from "../swr/plates";

export default function PlatesModal ({report,reportNo}) {
  const { data , error, mutate } = swrReportPlates(reportNo)

  const [openModal, setOpenModal] = useState(false);
  const [plateNo, setPlateNo] = useState('');
  const [plateSource, setPlateSource] = useState('');
  const [removed, setRemoved] = useState(false);

const add=async ()=>{
  const data=await addPlate(report.report_no,plateNo,plateSource,removed)
  setOpenModal(false)
  mutate()
}


  return (
    <>
   
        <th onClick={() => setOpenModal(true)} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
<div>       <Button>اضافة مركبات</Button>
</div>
        </th>
       

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
      <div className="space-y-3 text-sm">
           <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
            رقم المركبة
            </span>
            
            :
            <TextInput onChange={e=>setPlateNo(e.target.value)} className="w-28"  type="text" />
            </div>
          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
مصدر  اللوحة            </span>
            
            :
            <TextInput onChange={e=>setPlateSource(e.target.value)} className="w-28"  type="text" />
            </div>


          <div className="flex gap-x-3  items-center">
            <span className="text-green-500 font-semibold">
              
مصدر  اللوحة            </span>
            
            :
    <Select className="flex-1">
              <option>مركبة خفيفة</option>
              <option>بيكب</option>
              <option>مركبة ثقيلة</option>
              <option>باص</option>
              <option>باص</option>
            </Select>
            </div>
        
            <fieldset className="flex max-w-md flex-col gap-4">
      <legend onChange={e=>setRemoved(e.target.value)} className="mb-4 text-green-500 font-semibold">تم الإزاحة بواسطة الكرين؟</legend>
   
      <div className="flex items-center gap-2">
        <Radio id="germany" name="countries" value='true' />
        <Label htmlFor="germany">نعم</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="true" name="countries" value='false' />
        <Label htmlFor="germany">لا</Label>
      </div>
     
  
    </fieldset>
      </div>
   </Modal.Body>
   <Modal.Footer>
          <Button onClick={add}>اضافة</Button>
       
        </Modal.Footer>
      </Modal>
    </>
  );
}


