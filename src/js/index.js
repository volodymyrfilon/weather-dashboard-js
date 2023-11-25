import {
	_API_KEY,
	getUserLocationButton,
	searchCityButton,
	searchCityInput,
} from './modules/constants'
import fetchCurrentWeatherData from './modules/fetchCurrentWeatherData'
import { fetchForecastWeatherData } from './modules/fetchForecastWeatherData'
import getUserLocation from './modules/getUserLocation'
import { createDailyCards } from './services/createForecastCardsService'
import { errorBoundary } from './services/errorBoundaryService'
import { setLoadingState, unsetLoadingState } from './services/loadingStateService'

//* ================= GET USER LOCATION =================
getUserLocationButton.addEventListener('click', getUserLocation)
getUserLocation()
//* =============== HANLDE OF ALL WEATHER FETCHTES ===============
createDailyCards()
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

//* =============== GET & FORMAT CITY===============
function search() {
	const city = searchCityInput.value.trim()
	getAllWeatherData(city, _API_KEY)
	console.log(city)
}

//* ============= SEARCH WEATHER BUTTON EVENTLISTENERS =============
searchCityButton.addEventListener('click', search)
searchCityInput.addEventListener('keyup', e => {
	if (e.key == 'Enter') {
		search()
	}
})

const darkModeCheck = document.querySelector('.header__darkmode-check')
const darkModeText = document.querySelector('.header__darkmode-text')

darkModeCheck.addEventListener('change', () => {
	document.body.classList.toggle('dark')

	if (document.body.classList.contains('dark')) {
		darkModeText.textContent = 'Dark Mode'
	} else {
		darkModeText.textContent = 'Light Mode'
	}
})
