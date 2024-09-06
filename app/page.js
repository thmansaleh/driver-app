

"use client"
import Link from "next/link"
import Menu from "./components/Menu"
import Reports from "./reports/Reports"
export default function Home(){
 
  return <div className="flex items-center justify-center h-screen bg-white">

  <Menu/>
    <Reports/>
  </div>

}