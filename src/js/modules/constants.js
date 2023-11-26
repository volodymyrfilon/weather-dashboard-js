//* OTHER CONSTANTS
export const dynamicData = document.querySelectorAll('.dynamic-data')
export const _API_KEY = 'e732a92c66574d856b927e390c09674e'

//* HEDER CONSTANTS
export const searchCityInput = document.querySelector('.header__search-input')
export const searchCityButton = document.querySelector('.header__search-span')
export const getUserLocationButton = document.querySelector('.header__location')

//* WEATHER CITY SECTION
export const cityWeatherSection = document.querySelector('.weather__city')
export const weatherCity = cityWeatherSection.querySelector(	'.weather__city-name')
export const currentTime = cityWeatherSection.querySelector('.weather__city-time')
export const currentDate = cityWeatherSection.querySelector(	'.weather__city-date')

//* WEATHER CURRENT SECTION
export const currentWeatherSection = document.querySelector('.weather__current')
export const currentTemp = currentWeatherSection.querySelector('.weather__current-temperature')
export const currentTempFeels = currentWeatherSection.querySelector('.weather__current-feels_temperature')
export const sunriseTime = currentWeatherSection.querySelector('#currSunriseTime')
export const sunsetTime = currentWeatherSection.querySelector('#currSunsetTime')
export const currentIcon = currentWeatherSection.querySelector('.weather__current-icon')
export const currentWeather = currentWeatherSection.querySelector('.weather__current-weather')
export const currentHumidity = currentWeatherSection.querySelector('#currHumidity')
export const currentWind = currentWeatherSection.querySelector('#currWind')
export const currentPressure = currentWeatherSection.querySelector('#currPressure')
export const currentVisibility = currentWeatherSection.querySelector('#currVisibility')

//* WEATHER DAILY AND HOURLY SECTION
export const dailyWeatherSection = document.querySelector('.weather__days');
export const hourlyWeatherSection = document.querySelector('.weather__hours');

export const weatherIcons = {
	'01d': 'd-clear-sky', // Clear sky (day)
	'01n': 'n-clear-sky', // Clear sky (night)
	'02d': 'd-few-clouds', // Few clouds (day)
	'02n': 'n-few-clouds', // Few clouds (night)
	'03d': 'd-scattered-clouds', // Scattered clouds (day) -
	'03n': 'n-scattered-clouds', // Scattered clouds (night) -
	'04d': 'a-clouds', // Broken clouds (day) -
	'04n': 'a-clouds', // Broken clouds (night) -
	'09d': 'n-shower-rainl', // Shower rain (day) - 1
	'09n': 'n-shower-rain', // Shower rain (night) -
	'10d': 'a-rain', // Rain (day) - 2
	'10n': 'a-rain', // Rain (night) - 2
	'11d': 'd-thunderstorm', // Thunderstorm (day) - 1
	'11n': 'n-thunderstorm', // Thunderstorm (night) - 1
	'13d': 'd-snow', // Snow (day) - 1
	'13n': 'n-snow', // Snow (night) - 1
	'50d': 'a-haze', // Haze (day) - 2
	'50n': 'a-haze', // Haze (night) - 2
}
