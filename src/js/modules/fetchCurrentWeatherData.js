import {
	formatDate,
	metersToKm,
	mpsToKmh,
	roundDegree,
} from '../services/convertUnitsService'
import {
	currentDate,
	currentHumidity,
	currentIcon,
	currentPressure,
	currentTemp,
	currentTempFeels,
	currentVisibility,
	currentWeather,
	currentWind,
	sunriseTime,
	sunsetTime,
	weatherCity,
	weatherIcons,
} from './constants'

export const fetchCurrentWeatherData = async (data, key) => {
	let _API_URL
	if (data.lat && data.lon) {
		_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}&units=metric`
	} else {
		_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${key}&units=metric`
	}
	const response = await fetch(_API_URL)

	if (!response.ok) {
		if (response.status === 404) {
			throw new Error(
				`Sorry, we couldn't find ${data}. Please double-check the spelling and try again.`
			)
		} else {
			throw new Error(
				'Oops! We are having trouble with getting tha last weather information right now. Please try again later or contact support if the problem persists.'
			)
		}
	}
	const fetchCurrentWeatherData = await response.json()

	const { name, visibility, dt } = fetchCurrentWeatherData,
		{ speed } = fetchCurrentWeatherData.wind,
		{ temp, feels_like, humidity, pressure } = fetchCurrentWeatherData.main,
		{ icon, description } = fetchCurrentWeatherData.weather[0],
		{ sunrise, sunset } = fetchCurrentWeatherData.sys

	weatherCity.textContent = name;
	currentDate.textContent = await formatDate(dt, 'short');
	currentTemp.textContent = await roundDegree(temp);
	currentTempFeels.textContent = await roundDegree(feels_like);
	sunriseTime.textContent = `${await formatDate(sunrise, 'hour')} AM`;
	sunsetTime.textContent = `${await formatDate(sunset, 'hour')} PM`;
	currentIcon.src = `icons/weather/weather/${weatherIcons[icon]}.png`;
	currentWeather.textContent = description

	currentHumidity.textContent = `${humidity} %`;
	currentWind.textContent = await mpsToKmh(speed);
	currentPressure.textContent = `${pressure} hPa`;
	currentVisibility.textContent = await metersToKm(visibility);
}

export default fetchCurrentWeatherData
