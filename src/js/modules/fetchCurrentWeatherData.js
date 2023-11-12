import { formatDate, mpsToKmh, roundDegree } from '../services/convertUnitsService'
import {
	currentHumidity,
	currentIcon,
	currentPressure,
	currentTemp,
	currentTempFeels,
	currentUv,
	currentWeather,
	currentWeatherDate,
	currentWind,
	weatherCity
} from './constants'


export const fetchCurrentWeatherData = async(data, key) => {
  let _API_URL;
  if (data.lat && data.lon) {
    _API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${key}&units=metric`;
  } else {
    _API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${key}&units=metric`;
  }
  const response = await fetch(_API_URL);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Sorry, we couldn't find ${data}. Please double-check the spelling and try again.`);
    } else {
      throw new Error(
        "Oops! We are having trouble with getting tha last weather information right now. Please try again later or contact support if the problem persists."
      );
    }
  }
  const fetchCurrentWeatherData = await response.json();

  const {name, visibility, dt} = fetchCurrentWeatherData,
    {speed} = fetchCurrentWeatherData.wind,
    {temp, feels_like, humidity, pressure} = fetchCurrentWeatherData.main,
    {icon, description} = fetchCurrentWeatherData.weather[0],
    {sunrise, sunset} = fetchCurrentWeatherData.sys;

	weatherCity.textContent = name;
	currentWeatherDate.textContent = await formatDate(dt)
	// currentWeatherDate.textContent = dt;
	currentTemp.textContent = await roundDegree(temp);
	// currentTemp.textContent = temp;
	currentTempFeels.textContent = await roundDegree(feels_like);
	// currentTempFeels.textContent = feels_like;
	// sunrise.textContent = `${await formatDate(sunrise, "hour")} AM`;
	// sunset.textContent = `${await formatDate(sunset, "hour")} PM`;
	// sunriseTime.textContent = sunrise;
	// sunsetTime.textContent = sunset;
	// currWeatherIco.src = `icons/weather/weather-ico/${weatherIcons[icon]}.png`;
	currentIcon.src = icon;
	currentWeather.textContent = description;

	currentHumidity.textContent = `${humidity} %`;
	currentWind.textContent = await mpsToKmh(speed);
	// currentWind.textContent = speed;
	currentPressure.textContent = `${pressure} hPa`;
	// currentUv.textContent = await metersToKm(visibility);
	currentUv.textContent = visibility;
}

export default fetchCurrentWeatherData;