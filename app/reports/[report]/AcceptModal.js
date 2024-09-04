
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { changeReportState } from "@/app/services/changeReportState";

export function AcceptModal({id,action,name}) {
  const [openModal, setOpenModal] = useState(false);
  
  const changeStatus=async ()=>{
    const data=await changeReportState(id,action)
    setOpenModal(false)
  }
  return (
    <>
      <Button className="  w-full" gradientMonochrome="success" size='xs' onClick={() => setOpenModal(true)}>{
        name}</Button>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              هل انت متأكد من الأنتقال للحدث
            </h3>
            <div className="flex justify-center gap-4">
            <Button color="gray" onClick={() => setOpenModal(false)}>
                لا
              </Button>
              <Button gradientMonochrome="success" onClick={ changeStatus}>نعم </Button>
            
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
