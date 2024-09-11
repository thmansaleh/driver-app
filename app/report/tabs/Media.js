import { setTab } from '@/app/store/features/reports'
import { swrReport } from '@/app/swr/report'
import React from 'react'
import { useDispatch } from 'react-redux'

function Media() {
    const dispatch = useDispatch()
    const { data, error, isLoading, mutate } = swrReport()
if(data){
    if(!data.arrive) return null
}
    return (
        <div key='media-tab'>

            <input className="hidden tabs" type="radio" id='media-tab' name="tabs" />
            <label htmlFor='media-tab' >
                <div onClick={e => {
                    dispatch(setTab('media'))
                }} className="flex cursor-pointer ring-1 ring-gray-200  px-4  items-center gap-x-2 rounded-lg p-[7px]">
            <svg className="h-4 w-4 flex-shrink-0"  stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"></path></svg>
            <div className="text-sm font-semibold text-gray-800">الصور</div>
                </div>

            </label>
        </div>)
}

export default Media