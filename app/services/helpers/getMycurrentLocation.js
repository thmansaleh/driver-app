export function getMycurrentLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        callback(location);
      },
      (error) => {
        console.error("Error getting location", error);
        callback(null);
      },
      {
        enableHighAccuracy: true // This enables high accuracy mode
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
    callback(null);
  }
}
