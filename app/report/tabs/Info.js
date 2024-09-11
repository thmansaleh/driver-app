import { setTab } from '@/app/store/features/reports'
import { swrReport } from '@/app/swr/report'
import React from 'react'
import { useDispatch } from 'react-redux'

function Info() {
    const dispatch = useDispatch()

    return (
        <div key='info-tab'>

            <input className="hidden tabs" type="radio" id='info-tab' name="tabs" />
            <label htmlFor='info-tab' >
                <div onClick={e => {
                    dispatch(setTab('info'))
                }} className="flex cursor-pointer ring-1 ring-gray-200  px-4  items-center gap-x-2 rounded-lg p-[7px]">
        <svg  className="h-4 w-4 flex-shrink-0" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>       
        <div className="text-sm font-semibold text-gray-800">الحدث</div>
                </div>

            </label>
        </div>)
}

export default Info