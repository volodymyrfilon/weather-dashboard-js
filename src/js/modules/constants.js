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
export const currentTime = cityWeatherSection.querySelector('weather__city-time')
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

//* WEATHER DAILY SECTION
export const dailyWeatherSection = document.querySelector('.weather__days');
export const dailyIcon = document.querySelector('.weather__days-icon');
export const dailyTemp = document.querySelector('.weather__days-temperature');
export const dailyDate = document.querySelector('.weather__days-date');

//* WEATHER HOURLY SECTION
// export const hourlyWeatherSection = document.querySelector('');
