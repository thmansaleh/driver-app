import { getMycurrentLocation } from '@/app/services/helpers/getMycurrentLocation';
import { updatCarLocation } from '@/app/services/updatCarLocation';
import  { useEffect } from 'react'
import { useSelector } from 'react-redux';

function Tracking() {
    const nida =useSelector(state=>state.account.account.nida)
    useEffect(() => {
        getMycurrentLocation( async(loc) => {
            if (loc) {
            //   setLocation(loc);
            console.log(loc)
            const data = await updatCarLocation(nida,loc.lat,loc.lng)
            // await getData(loc)
            console.log(data)
            }
          });
      
       
     const getData=async(loc)=>{
    //  console.log('from fu',loc)
        // const data = await updatCarLocation(nida,loc.lat,loc.lng)
        // setDistance(data.distance)
        // setTime(data.time)
     }
    //  getData()
    }, [])

    return null
}
export default Tracking