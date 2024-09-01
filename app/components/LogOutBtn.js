
"use client";

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import { logOut } from "../store/features/account";

export default function LogOutBtn() {
  const [isOpen, setIsOpen] = useState(false);
const dispatch=useDispatch()
  const handleClose = () => setIsOpen(false);

  return (
    <>
    <button onClick={() => setIsOpen(true)}  id="dropdownButton" data-dropdown-toggle="dropdown" className=" fixed top-3 right-3 inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
  <span className="sr-only">Open dropdown</span>
  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
  </svg>
</button>
      {/* <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show navigation</Button>
      </div> */}
      <Drawer dir="rtl" open={isOpen} onClose={handleClose}>
        <Drawer.Header title="القائمة" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
             
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    
                    <Sidebar.Item  onClick={()=>{
dispatch(logOut())
                    }} className='text-red-600' icon={HiLogin}>
                     تسجيل خروج
                    </Sidebar.Item>
                  
                  </Sidebar.ItemGroup>
              
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
