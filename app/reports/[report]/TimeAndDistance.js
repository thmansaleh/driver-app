import { getDistance } from "@/app/services/getDistance"
import { getLocation } from "@/app/services/helpers/getMycurrentLocation"
import { useEffect, useState } from "react"

function TimeAndDistance({report}) {
    const [time,setTime]=useState('')
    const [distance,setDistance]=useState('')
    const [location, setLocation] = useState(null);

    useEffect(() => {
        getLocation( async(loc) => {
            if (loc) {
              setLocation(loc);
            console.log(loc)
            await getData(loc)
            }
          });
      
       
     const getData=async(loc)=>{
     console.log('from fu',loc)
        const data = await getDistance(loc.lat,loc.lng,report.lat,report.lng)
        setDistance(data.distance)
        setTime(data.time)
     }
    //  getData()
    }, [])
    
  return (
    <div className='space-y-3'>
        <div>المسافة : {distance}</div>
        <div>الوقت المتوقع للوصول : {time}</div>
    </div>
  )
}

export default TimeAndDistance