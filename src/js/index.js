import {
	_API_KEY,
	currentTime,
	getUserLocationButton,
	searchCityButton,
	searchCityInput,
} from './modules/constants'
import fetchCurrentWeatherData from './modules/fetchCurrentWeatherData'
import { fetchForecastWeatherData } from './modules/fetchForecastWeatherData'
import getUserLocation from './modules/getUserLocation'
import { formatDate } from './services/convertUnitsService'
import { createDailyCards, createHourlyCards } from './services/createForecastCardsService'
import { errorBoundary } from './services/errorBoundaryService'
import { setLoadingState, unsetLoadingState } from './services/loadingStateService'

//CURRENT TIME
setInterval( async () => {
	const currTime = await formatDate(null, "currentTime");
	currentTime.textContent = currTime;
}, 1000)

// GET USER LOCATION
getUserLocationButton.addEventListener('click', getUserLocation)
getUserLocation()

//GET & FORMAT CITY
function search() {
	const city = searchCityInput.value.trim()
	getAllWeatherData(city, _API_KEY)
	console.log(city)
}

//HANLDE ALL WEATHER FETCHTES
createDailyCards()
createHourlyCards()

export const getAllWeatherData = async (data, _API_KEY) => {
	try {
		await setLoadingState()
		await fetchCurrentWeatherData(data, _API_KEY)
		await fetchForecastWeatherData(data, _API_KEY)
		await unsetLoadingState()
	} catch (error) {
		if (error.message === 'Failed to fetch') {
			await errorBoundary(
				"Oh! It looks like you're not connected to the internet. Please check your connection and try again.",
				'Refresh Page'
			)
		} else {
			await errorBoundary(error.message, 'Try Again')
		}
	}
}
export default getAllWeatherData;

//SEARCH WEATHER BUTTON EVENTLISTENERS
searchCityButton.addEventListener('click', search)
searchCityInput.addEventListener('keyup', e => {
	if (e.key == 'Enter') {
		search()
	}
})

//DARKMODE
const darkModeCheck = document.querySelector('.header__darkmode-check');
const darkModeText = document.querySelector('.header__darkmode-text');

// Load and set dark mode state from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

  document.body.classList.toggle('dark', isDarkMode);
  darkModeText.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
  darkModeCheck.checked = isDarkMode;
});

// Toggle dark mode and save state to localStorage on change
darkModeCheck.addEventListener('change', () => {
  const isDarkMode = document.body.classList.toggle('dark');

  darkModeText.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
  localStorage.setItem('isDarkMode', isDarkMode.toString());
});