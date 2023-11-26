import { dailyWeatherSection, hourlyWeatherSection } from '../modules/constants'

//* DAILY CARDS !
export const createDailyCards = async () => {
	const dailyWrapper = dailyWeatherSection.querySelector('.weather__days-wrapper')
	for (let i = 0; i < 5; i++) {
		const dailyWeatherCard = document.createElement("div");
		dailyWeatherCard.classList.add("weather__days-item");
		
		const dailyIcon = document.createElement("img");
		dailyIcon.classList.add("weather__days-icon");
		dailyIcon.setAttribute('alt', 'icon');
		
		const dailyTemp = document.createElement("div");
		dailyTemp.classList.add("weather__days-temperature");
		
		const dailyDate = document.createElement("div");
		dailyDate.classList.add("weather__days-date");
		
		dailyWeatherCard.append(dailyIcon, dailyTemp, dailyDate)
		dailyWrapper.appendChild(dailyWeatherCard);
	}
}

//* HOURLY CARDS !
export const createHourlyCards = async () => {
	const hourlyWrapper = hourlyWeatherSection.querySelector('.weather__hours-wrapper')
	for (let i = 0; i < 6; i++) {		
		const hourlyWeatherCard = document.createElement("div");
		hourlyWeatherCard.classList.add("weather__hours-item");
		
		const hourlyDate = document.createElement("div");
		hourlyDate.classList.add("weather__hours-time");

		const hourlyIconWeather = document.createElement("img");
		hourlyIconWeather.classList.add("weather__hours-icon_weather");
		hourlyIconWeather.setAttribute('alt', 'icon-weather');
		
		const hourlyTemp = document.createElement("div");
		hourlyTemp.classList.add("weather__hours-temperature");
		
		const hourlyIconWind = document.createElement("img");
		hourlyIconWind.classList.add("weather__hours-icon_wind");
		hourlyIconWind.setAttribute('alt', 'icon-wind');

		const hourlyWind = document.createElement('div');
		hourlyWind.classList.add("weather__hours-wind");

		hourlyWeatherCard.append(hourlyDate, hourlyIconWeather, hourlyTemp, hourlyIconWind, hourlyWind);
		hourlyWrapper.appendChild(hourlyWeatherCard);
	}
}
