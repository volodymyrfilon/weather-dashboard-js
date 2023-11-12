const getUserLocation = async () => {
	const successCallback = async (position) => {
			const userLocation = {
			lat: position.coords.latitude,
			lon: position.coords.longitude
			}
			console.log(userLocation);
			// await fetchFullWeatherData(GPSData, API_KEY);
	}

	const errorCallback = (error) => {
			console.log(error);
			// fetchFullWeatherData("Kyiv", API_KEY);
	}
	navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

export default getUserLocation;