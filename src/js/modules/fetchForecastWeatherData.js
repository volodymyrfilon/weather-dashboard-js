import { formatDate, roundDegree, weatherIcons } from '../services/convertUnitsService'
import { dailyWeatherSection } from './constants'

export const fetchForecastWeatherData = async (data, key) => {
  const dailyIcon = dailyWeatherSection.querySelectorAll('.weather__days-icon');
  const dailyTemp = dailyWeatherSection.querySelectorAll('.weather__days-temperature');
  const dailyDate = dailyWeatherSection.querySelectorAll('.weather__days-date');

	let API_URL;
	if (data.lat && data.lon) {
    API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=${key}&units=metric`;
  } else {
    API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${key}&units=metric`;
  }

	const response = await fetch(API_URL);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Sorry, we couldn't find ${data}. Please double-check the spelling and try again.`);
    } else {
      throw new Error(
        "Oops! We're having trouble getting the latest weather information right now. Please try again later or contact support if the problem persists."
      );
    }
  }
	const fetchForecastWeatherData = await response.json();
  const findDailyItems = (data) => {
    let dailyItems = [];
    for (let i = 0; i <40; i++) {
      if (data.list[i].dt_txt.match('12:00:00')) {
        dailyItems.push(fetchForecastWeatherData.list[i]);
      }
    }
    return dailyItems;
  }
  const dailyData = findDailyItems(fetchForecastWeatherData)
  
	for (let i = 0; i < 5; i++) {
		dailyIcon[i].src = `icons/weather/weather/${weatherIcons[dailyData[i].weather[0].icon]}.png`;
		dailyTemp[i].textContent = await roundDegree(dailyData[i].main.temp);
		dailyDate[i].textContent = await formatDate(dailyData[i].dt, 'short');
  }
}

//   for (let index = 0; index < 40; index++) {
//     dailyForecastWeatherDate[index].innerHTML = await formatDate(fetchForecastWeatherData.list[index].dt, "short");
//     dailyForecastWeatherTime[index].innerHTML = await formatDate(fetchForecastWeatherData.list[index].dt, "hour");
//     dailyForecastWeatherIcon[index].src = `/icons/weather/weather-ico/${weatherIcons[fetchForecastWeatherData.list[index].weather[0].icon]}.png`;
//     dailyForecastWeatherTemp[index].innerHTML = await roundDegree(fetchForecastWeatherData.list[index].main.temp);
//     dailyForecastWeatherDescr[index].innerHTML = fetchForecastWeatherData.list[index].weather[0].main;
//   }
// }
