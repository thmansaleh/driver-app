
"use client";

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { swrReport } from "../swr/report";
import { useDispatch, useSelector } from "react-redux";
import { changeReportStatus } from "../services/changeReportStatus";
import { setDetails, setReportId } from "../store/features/reports";

export default function ChangeReportStatusModal({showBtn}) {
  // const [openModal, setOpenModal] = useState(false);
  const reportId=useSelector(state=>state.reports.reportId)
  const dispatch=useDispatch()
  const modalStatusDisplay=useSelector(state=>state.reports.modalStatusDisplay)

  const { data, error, isLoading, mutate } = swrReport(reportId)
const changeStatus=async()=>{
    const action= !data.start?'start':!data.arrive?'arrive':'finish'

 const req = await changeReportStatus(data.id,action)

 dispatch(setDetails({action:'showReport',data:true}))
 mutate()
 
//  setOpenModal(false)
      //  dispatch(setReportId(data.id))


dispatch(setDetails({action:'modalStatusDisplay',data:false}))
}
 if(data) return (
    <>
   {!data.finish?<Button gradientMonochrome="success" className={showBtn?'':' hidden'} size='sm'  onClick={() => dispatch(setDetails({action:'modalStatusDisplay',data:true}))
}>
    {!data.start?'بدء الحدث':!data.arrive?'تغيير الحالة الى وصول':'انهاء الحدث'}
      </Button>:null}
      <Modal show={modalStatusDisplay} size="md" onClose={() => dispatch(setDetails({action:'modalStatusDisplay',data:false}))
} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
             هل انت متأكد من 
             {` `} 
                {!data.start?'بدء الحدث':!data.arrive?'تغيير الحالةالى وصول':'انهاء الحدث'}
                ؟
             

            </h3>
            <div className="flex justify-center gap-4">
              <Button color="gray" onClick={() => dispatch(setDetails({action:'modalStatusDisplay',data:false}))
}>
                {"إغلاق"}
              </Button>
              <Button gradientMonochrome="success" onClick={changeStatus}>
                موافق
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
