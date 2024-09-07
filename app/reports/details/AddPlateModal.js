
"use client";

import { Button, Label, Modal, Radio, Select, TextInput } from "flowbite-react";
import { useState } from "react";
// import { addPlate } from "../../services/addPlate";
import { swrReportPlates } from "../../swr/plates";
import CarsType from "./CarsType";
import Source from "./Source";
import { useDispatch } from "react-redux";
import { addPlate } from "@/app/store/features/plates";
import AddPlateBtn from "./AddPlateBtn";

export default function AddPlateModal ({reportId}) {
  const { data , error, mutate } = swrReportPlates(reportId)
const dispatch=useDispatch()
  const [openModal, setOpenModal] = useState(false);
  const [plateNo, setPlateNo] = useState('');
  const [plateSource, setPlateSource] = useState('');
  const [removed, setRemoved] = useState(false);


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
            <TextInput 
            // onChange={e=>dispatch(e.target.value)}
            onChange={(e)=>dispatch(addPlate({action:'plateNo',data:e.target.value}))}
            
             className="w-28"  type="text" />
            </div>
         
<Source/>
<CarsType/>


        
            <fieldset className="flex max-w-md flex-col gap-4">
      <legend 
            onChange={(e)=>console.log(e.value)}
            className="mb-4 text-green-500 font-semibold">تم الإزاحة بواسطة الكرين؟</legend>
   
      <div className="flex items-center gap-2">
        <Radio  onChange={(e)=>dispatch(addPlate({action:'isRemoved',data:e.target.value}))} id="germany" name="countries" value='نعم' />
        <Label htmlFor="germany">نعم</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio onChange={(e)=>dispatch(addPlate({action:'isRemoved',data:e.target.value}))} id="true" name="countries" value='لا' />
        <Label htmlFor="germany">لا</Label>
      </div>
     
  
    </fieldset>
      </div>
   </Modal.Body>
   <Modal.Footer>
       <AddPlateBtn reportId={reportId}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}


