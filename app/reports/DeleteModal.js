
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { deletePlate  as deleteCarPlate} from "../services/deletePlate";

export function DeleteModal({id}) {
  const [openModal, setOpenModal] = useState(false);
  const deletePlate=async ()=>{
    const data=await deleteCarPlate(id)
    setOpenModal(false)
  }
  return (
    <>
      <Button size='xs' onClick={() => setOpenModal(true)}>حذف</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              هل انت متأكد من حذف المركبة؟
            </h3>
            <div className="flex justify-center gap-4">
            <Button color="gray" onClick={() => setOpenModal(false)}>
                لا
              </Button>
              <Button color="failure" onClick={ deletePlate}>نعم </Button>
            
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
