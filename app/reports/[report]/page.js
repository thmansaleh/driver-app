'use client'
import { swrReport } from "@/app/swr/report"
import ReportLocation from "./ReportLocation"
import { AcceptModal } from "./AcceptModal"
import TimeAndDistance from "./TimeAndDistance"
import RedirectToMap from "./RedirectToMap"

function page({ params }) {
    const reportId = params.report

    const { data, error, isLoading, mutate } = swrReport(reportId)
    
    if (isLoading) return 'loading'

    if (data?.finish) return 'تم انهاء الحدث'

    if (data) {
        return (
            <div className='bg-gray-1003 text-center space-y-3 text-base flex font-semibold p-3 flex-col text-gray-900 flex-1'>
                <div className="bg-gray-200 text-center rounded-lg py-2 px-3 text-base text-green-600 font-bold">
                    رقم الحدث : {data.report_no}
                </div>

                <div className="space-y-2">
                    <div> وقت إنشاء الحدث : {new Date(data.date).toLocaleTimeString()}</div>
                    <div> نوع الحدث : {data.type}</div>
                    <div> مصدر الحدث : {data.source_name}</div>
                    <div> الشارع : {data.street_name}</div>
                    <div> الوصف : {data.description}</div>
                    <div> الملاحظات : {data.note_police}</div>
                    {/* <div> موقع الحدث : {data.location_name}</div> */}
<ReportLocation location={data.location_name}/>
<TimeAndDistance report={data}/>
<RedirectToMap lat={data.lat} lng={data.lng}/>
                    {!data.start && (
                        <AcceptModal action='start' name='الأنتقال للحدث' id={data.id} />
                    )}
                    {data.start && !data.arrive && !data.finish && (
                        <AcceptModal action='arrive' name='تغيير الحالة الى وصول' id={data.id} />
                    )}
                    {(data.arrive && !data.finish) && (
                        <AcceptModal action='finish' name='انهاء الحدث' id={data.id} />
                    )}
                </div>
            </div>
        )
    }

    return null
}

export default page
