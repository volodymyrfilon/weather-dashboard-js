import { dailyWeatherSection } from '../modules/constants'

//* DAILY CARDS !
export const createDailyCards = async () => {
	for (let i = 0; i < 5; i++) {
		const dailyWrapper = dailyWeatherSection.querySelector('.weather__days-wrapper')

		const dailyWeatherCard = document.createElement("div");
		dailyWeatherCard.classList.add("weather__days-item");
		
		const dailyIcon = document.createElement("img");
		dailyIcon.classList.add("weather__days-icon");
		dailyIcon.setAttribute('value', i);
		dailyIcon.setAttribute('alt', 'icon');
		dailyIcon.setAttribute('src', '');
		
		const dailyTemp = document.createElement("div");
		dailyTemp.classList.add("weather__days-temperature");

		const dailyDate = document.createElement("div");
		dailyDate.classList.add("weather__days-date");
		dailyDate.setAttribute('value', i)

		dailyWeatherCard.append(dailyIcon, dailyTemp, dailyDate)
		dailyWrapper.appendChild(dailyWeatherCard);
	}
}