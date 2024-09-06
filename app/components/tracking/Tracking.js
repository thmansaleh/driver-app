import { getMycurrentLocation } from '@/app/services/helpers/getMycurrentLocation';
import { updatCarLocation } from '@/app/services/updatCarLocation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Tracking() {
    const nida = useSelector(state => state.account.account.nida);

    useEffect(() => {
        // Function to fetch and update location
        const fetchAndUpdateLocation = async () => {
            getMycurrentLocation(async (loc) => {
                if (loc) {
                    // console.log(loc);
                    const data = await updatCarLocation(nida, loc.lat, loc.lng);
                    // console.log(data)
                }
            });
        };

        // Call the function immediately once on component mount
        fetchAndUpdateLocation();

        // Set interval to call the function every 6 seconds (6000 milliseconds)
        const intervalId = setInterval(() => {
            fetchAndUpdateLocation();
        }, 6000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);

    }, [nida]);

    return null;
}

export default Tracking;
