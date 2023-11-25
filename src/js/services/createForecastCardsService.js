import { dailyWeatherSection } from '../modules/constants'

//* DAILY CARDS !
export const createDailyCards = () => {
	for (let i = 0; i < 5; i++) {
		const dailyWeatherCard = document.createElement("div");
		dailyWeatherCard.classList.add("weather__days-item", "dynamic-data", "loading");
		
		const dailyIcon = document.createElement("img");
		dailyIcon.classList.add("weather__days-icon");
		dailyIcon.setAttribute('value', i);
		dailyIcon.setAttribute('alt', 'icon');
		
		const dailyTemp = document.createElement("div");
		dailyTemp.classList.add("weather__days-temperature");

		const dailyDate = document.createElement("div");
		dailyDate.classList.add("weather__days-date");
		dailyDate.setAttribute('value', i)

		dailyWeatherCard.append(dailyIcon, dailyTemp, dailyDate)
		dailyWeatherSection.appendChild(dailyWeatherCard);
	}
}