import getAllWeatherData from '..'
import { _API_KEY } from './constants'

export const getUserLocation = async () => {
	const successCallback = async (position) => {
			const userLocation = {
			lat: position.coords.latitude,
			lon: position.coords.longitude
			}
			console.log(userLocation);
			await getAllWeatherData(userLocation, _API_KEY);
	}

	const errorCallback = (error) => {
			console.log(error);
			getAllWeatherData("Kyiv", _API_KEY);
	}
	navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

export default getUserLocation;