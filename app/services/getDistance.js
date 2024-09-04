export const getDistance = async (startLat,startLng,endLat,endLng) => {
    const url = 'https://graphhopper.com/api/1/route';
    // const startLat = 25.276987;
    // const startLng = 55.296249;
    // const endLat = 24.453884;
    // const endLng = 54.377344;

    const params = new URLSearchParams({
        profile: 'car',
        locale: 'en',
        calc_points: false,
        instructions: false,
        key: '5f475f0f-2c62-42d4-a519-3d731ed471d4'
    });

    // Manually append the `point` parameters to ensure both are included
    params.append('point', `${startLat},${startLng}`);
    params.append('point', `${endLat},${endLng}`);

    try {
        const response = await fetch(`${url}?${params}`);
        if (!response.ok) {
            // throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Extract distance (in meters) and time (in milliseconds)
        const distanceInMeters = data.paths[0].distance;
        const timeInMilliseconds = data.paths[0].time;

        // Convert distance to kilometers and time to minutes
        const distanceInKm = distanceInMeters / 1000;
        const timeInMinutes = timeInMilliseconds / 1000 / 60;

        // Log the results in Arabic
        // console.log(`المسافة: ${distanceInKm.toFixed(2)} KM`);
        // console.log(`الوقت: ${timeInMinutes.toFixed(2)} دقيقة`);

        // Return the results in Arabic
        return {
            distance: `${distanceInKm.toFixed(2)} كم`, // distance in kilometers
            time: `${timeInMinutes.toFixed(2)} دقيقة` // time in minutes
        };
    } catch (error) {
        // console.error('خطأ في الجلب:', error);
        // throw error;
    }
};
