'use client'
import { swrReport } from "@/app/swr/report"

import Content from "./Content"
import Tabs from "./tabs/Tabs"

function Report() {

    const { data, error, isLoading, mutate } = swrReport()
    
    if (isLoading) return 'loading'

    if (data?.finish) return 'تم انهاء الحدث'

  
return <>
<div className="  w-full">
<Tabs/>
<Content/>

</div>
</>
    return null
}

export default Report
