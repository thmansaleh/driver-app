import { setTab } from '@/app/store/features/reports'
import { swrReport } from '@/app/swr/report'
import React from 'react'
import { useDispatch } from 'react-redux'

function Details() {
    const dispatch = useDispatch()
    const { data, error, isLoading, mutate } = swrReport()
if(data){
    if(!data.arrive) return null
}
    return (
        <div key='deatils-tab'>

            <input className="hidden tabs" type="radio" id='details-tab' name="tabs" />
            <label htmlFor='details-tab' >
                <div onClick={e => {
                    dispatch(setTab('details'))
                }} className="flex cursor-pointer ring-1 ring-gray-200  px-4  items-center gap-x-2 rounded-lg p-[7px]">
                    <svg className="h-4 w-4 flex-shrink-0" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M48 82.7v346.7c0 19.1 15.5 34.7 34.7 34.7h346.7c19.1 0 34.7-15.5 34.7-34.7V82.7c0-19.1-15.5-34.7-34.7-34.7H82.7C63.5 48 48 63.5 48 82.7zm89.3 297.1c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zm0-104c-13.1 1.7-24.1-9.3-22.4-22.4 1.1-8.9 8.3-16.1 17.2-17.2 13.1-1.7 24.1 9.3 22.4 22.4-1.1 8.9-8.3 16.1-17.2 17.2zM384.7 374h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14zm0-104h-180c-7.7 0-14-6.3-14-14s6.3-14 14-14h180c7.7 0 14 6.3 14 14s-6.3 14-14 14z"></path></svg>
                    <div className="text-sm font-semibold text-gray-800">التفاصيل</div>
                </div>

            </label>
        </div>)
}

export default Details