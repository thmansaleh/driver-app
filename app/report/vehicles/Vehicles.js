import { swrReportPlates } from "@/app/swr/plates"
import { Spinner } from "flowbite-react"
import Table from "./Table"
import AddPlateModal from "./AddPlateModal"

function Vehicles() {
  const { data, error, isLoading, mutate } = swrReportPlates()
  if (isLoading) return <div className="flex items-center justify-center w-full pt-4"><Spinner color='success'/></div>
   return <div className=" text-center space-y-2 p-2">
    <Table/>
    <AddPlateModal/>
   </div>

}

export default Vehicles