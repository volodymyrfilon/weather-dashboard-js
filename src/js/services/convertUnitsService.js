export const formatDate = async (unixTimestamp, type) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeekShortened = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYearShortened = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = new Date(unixTimestamp * 1000);
  const dayOfMonth = date.getDate();
  const monthIndex = date.getMonth();
  const dayOfWeekIndex = date.getDay();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${dayOfMonth} ${monthsOfYear[monthIndex]} ${daysOfWeek[dayOfWeekIndex]}`;
  const formattedDateShortened = `${daysOfWeek[dayOfWeekIndex]}, ${dayOfMonth} ${monthsOfYearShortened[monthIndex]}`;
  // const formattedDateShortened = `${dayOfMonth} ${monthsOfYearShortened[monthIndex]} ${daysOfWeekShortened[dayOfWeekIndex]}`;

  switch (type) {
    case "day":
      return daysOfWeek[dayOfWeekIndex];
    case "hour":
      return `${hours}:${minutes}`;
    case "short":
      return formattedDateShortened;
    default:
      return formattedDate;
  }
}

export const mpsToKmh = async (mps) => {
  return `${Math.round(mps * 3.6)} km/h`;
}

export const metersToKm = async (meters) => {
  return `${meters / 1000} km`;
}

export const roundDegree = async (degree) => {
  const formatDegree = (degree) => {
    if (degree < 10 && degree >= 0) {
      return `0${degree}°C`
    } else if (degree > -10 && degree < 0) {
      return `${degree}°C`
    } else {
      return `${degree}°C`
    }
  }
  
  return formatDegree(Math.round(degree));
  // let result;
  // if ((Math.round(degree * 10) / 10) % 1 === 0) {
  //   result = (Math.round(degree * 10) / 10).toFixed(1);
  //   return formatDegree(result);
  // } else {
  //   result = Math.round(degree * 10) / 10;
  //   return formatDegree(result);
  // }
}

export const weatherIcons = {
  "01d": "d-clear-sky",         // Clear sky (day)
  "01n": "n-clear-sky",         // Clear sky (night) 
  "02d": "d-few-clouds",        // Few clouds (day)
  "02n": "n-few-clouds",        // Few clouds (night) 
  "03d": "d-scattered-clouds",  // Scattered clouds (day) - 
  "03n": "n-scattered-clouds",  // Scattered clouds (night) - 
  "04d": "a-clouds",            // Broken clouds (day) -
  "04n": "a-clouds",            // Broken clouds (night) - 
  "09d": "n-shower-rainl",      // Shower rain (day) - 1
  "09n": "n-shower-rain",       // Shower rain (night) - 
  "10d": "a-rain",              // Rain (day) - 2
  "10n": "a-rain",              // Rain (night) - 2
  "11d": "d-thunderstorm",      // Thunderstorm (day) - 1
  "11n": "n-thunderstorm",      // Thunderstorm (night) - 1
  "13d": "d-snow",              // Snow (day) - 1
  "13n": "n-snow",              // Snow (night) - 1
  "50d": "a-haze",              // Haze (day) - 2
  "50n": "a-haze"               // Haze (night) - 2
}

