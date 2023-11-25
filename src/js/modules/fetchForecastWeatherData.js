import { dailyDate, dailyIcon, dailyTemp } from './constants'

export const fetchForecastWeatherData = async (data, key) => {
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
  // await filterForecastWeatherData(fetchForecastWeatherData);

	for (let index = 0; index < 5; index++) {
		dailyIcon[index].innerHTML = await formatDate(fetchForecastWeatherData.list[index].weather[0]);
		dailyTemp[index].innerHTML = await roundDegree(fetchForecastWeatherData.list[index].main.temp);
		dailyDate[index].innerHTML = await formatDate(fetchForecastWeatherData.list[index].dt, 'short');
  }
}

// export const fetchForecastWeatherData = async (data, key) => {
//   const hourlyForecastWeatherDate = document.querySelectorAll("#hourDate");
//   const hourlyForecastWeatherTime = document.querySelectorAll("#hourTime");
//   const hourlyForecastWeatherTemp = document.querySelectorAll("#hourTemp");

//   const dailyForecastWeatherDate = document.querySelectorAll(".weather__forecast-date");
//   const dailyForecastWeatherTime = document.querySelectorAll(".weather__forecast-time");
//   const dailyForecastWeatherIcon = document.querySelectorAll(".weather__forecast-icon");
//   const dailyForecastWeatherTemp = document.querySelectorAll(".weather__forecast-temp");
//   const dailyForecastWeatherDescr = document.querySelectorAll(".weather__forecast-descr");

//   let API_URL;

//   if (data.lat && data.lon) {
//     API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=${key}&units=metric`;
//   } else {
//     API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${key}&units=metric`;
//   }

//   const response = await fetch(API_URL);
//   if (!response.ok) {
//     if (response.status === 404) {
//       throw new Error(`Sorry, we couldn't find ${data}. Please double-check the spelling and try again.`);
//     } else {
//       throw new Error(
//         "Oops! We're having trouble getting the latest weather information right now. Please try again later or contact support if the problem persists."
//       );
//     }
//   }

//   const fetchForecastWeatherData = await response.json();
//   await filterForecastWeatherData(fetchForecastWeatherData);

//   for (let index = 0; index < 5; index++) {
//     hourlyForecastWeatherDate[index].innerHTML = await formatDate(fetchForecastWeatherData.list[index].dt, "day");
//     hourlyForecastWeatherTime[index].innerHTML = await formatDate(fetchForecastWeatherData.list[index].dt, "hour");
//     hourlyForecastWeatherTemp[index].innerHTML = await roundDegree(fetchForecastWeatherData.list[index].main.temp);
//   }

//   for (let index = 0; index < 40; index++) {
//     dailyForecastWeatherDate[index].innerHTML = await formatDate(fetchForecastWeatherData.list[index].dt, "short");
//     dailyForecastWeatherTime[index].innerHTML = await formatDate(fetchForecastWeatherData.list[index].dt, "hour");
//     dailyForecastWeatherIcon[index].src = `/icons/weather/weather-ico/${weatherIcons[fetchForecastWeatherData.list[index].weather[0].icon]}.png`;
//     dailyForecastWeatherTemp[index].innerHTML = await roundDegree(fetchForecastWeatherData.list[index].main.temp);
//     dailyForecastWeatherDescr[index].innerHTML = fetchForecastWeatherData.list[index].weather[0].main;
//   }
// }
