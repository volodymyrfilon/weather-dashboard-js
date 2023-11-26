import { formatDate, mpsToKmh, roundDegree, } from '../services/convertUnitsService'
import { dailyWeatherSection, hourlyWeatherSection, weatherIcons } from './constants'

export const fetchForecastWeatherData = async (data, key) => {
  const dailyIcon = dailyWeatherSection.querySelectorAll('.weather__days-icon');
  const dailyTemp = dailyWeatherSection.querySelectorAll('.weather__days-temperature');
  const dailyDate = dailyWeatherSection.querySelectorAll('.weather__days-date');

  const hourlyItems = document.querySelectorAll('.weather__hours-item');
  const hourlyTime = hourlyWeatherSection.querySelectorAll('.weather__hours-time');
  const hourlyIconWeather = hourlyWeatherSection.querySelectorAll('.weather__hours-icon_weather');
  const hourlyTemp = hourlyWeatherSection.querySelectorAll('.weather__hours-temperature');
  const hourlyIconWind = hourlyWeatherSection.querySelectorAll('.weather__hours-icon_wind');
  const hourlyWind = hourlyWeatherSection.querySelectorAll('.weather__hours-wind');

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
  

  //* DAILY WEATHER DATA HANDLING !
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

  //* HOURLY WEATHER DATA HANDLING!
  const rotateWindIcon = (selector, deg) => {
    selector.style.transform = `rotate(${deg - 45}deg)`;
  }

  const handleItemBackground = (selector, time) => {
    const dayTimes = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
    if (!dayTimes.includes(time)) {
     selector.style.background = 'linear-gradient(174deg, #443D64 -15.92%, rgba(101, 130, 198, 0.00) 192.45%)'; 
    }
  }

  for (let i = 0; i < 6; i++) {
    hourlyTime[i].textContent = await formatDate(fetchForecastWeatherData.list[i].dt, "hour");
    hourlyIconWeather[i].src = `/icons/weather/weather/${weatherIcons[fetchForecastWeatherData.list[i].weather[0].icon]}.png`;
    hourlyTemp[i].textContent = await roundDegree(fetchForecastWeatherData.list[i].main.temp);
    hourlyIconWind[i].src = `/icons/weather/wind-vector.svg`;
    rotateWindIcon(hourlyIconWind[i], fetchForecastWeatherData.list[i].wind.deg);
    hourlyWind[i].textContent = await mpsToKmh(fetchForecastWeatherData.list[i].wind.speed);

    handleItemBackground(hourlyItems[i], hourlyTime[i].textContent)
  }
}
