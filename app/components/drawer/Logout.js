import { logOut } from '@/app/store/features/account'
import React from 'react'
import { useDispatch } from 'react-redux'

function Logout() {
    const dispatch = useDispatch()
    return (
        <div onClick={() => {
            dispatch(logOut())
        }} className='text-red-600'>
            تسجيل خروج
        </div>
    )
}

export default Logout