export const formatDate = async (unixTimestamp, type) => {
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	const monthsOfYear = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	const daysOfWeekShortened = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	const monthsOfYearShortened = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	]

	const date = new Date(unixTimestamp * 1000)
	const dayOfMonth = date.getDate()
	const monthIndex = date.getMonth()
	const dayOfWeekIndex = date.getDay()
	const hours = date.getHours().toString().padStart(2, '0')
	const minutes = date.getMinutes().toString().padStart(2, '0')

	const currentDate = new Date(); 
	const currentHours = currentDate.getHours().toString().padStart(2, '0');
	const currentMinutes = currentDate.getMinutes().toString().padStart(2, '0');

	const formattedDate = `${dayOfMonth} ${monthsOfYear[monthIndex]} ${daysOfWeek[dayOfWeekIndex]}`
	const formattedDateShortened = `${daysOfWeek[dayOfWeekIndex]}, ${dayOfMonth} ${monthsOfYearShortened[monthIndex]}`
	const formattedDateTheShortest = `${daysOfWeekShortened[dayOfWeekIndex]}, ${dayOfMonth} ${monthsOfYearShortened[monthIndex]}`;

	switch (type) {
		case 'day':
			return daysOfWeek[dayOfWeekIndex]
		case 'hour':
			return `${hours}:${minutes}`
		case 'short':
			return formattedDateShortened
		case 'shortest':
			return formattedDateTheShortest
		case 'currentTime':
			return `${currentHours}:${currentMinutes}`
		default:
			return formattedDate
	}
}

export const mpsToKmh = async mps => {
	return `${Math.round(mps * 3.6)} km/h`
}

export const metersToKm = async meters => {
	return `${meters / 1000} km`
}

export const roundDegree = async degree => {
	const formatDegree = degree => {
		if (degree < 10 && degree > 0) {
			return `0${degree}°C`
		} else if (degree > -10 && degree < 0) {
			return `${degree}°C`
		} else {
			return `${degree}°C`
		}
	}

	return formatDegree(Math.round(degree))
	// let result;
	// if ((Math.round(degree * 10) / 10) % 1 === 0) {
	//   result = (Math.round(degree * 10) / 10).toFixed(1);
	//   return formatDegree(result);
	// } else {
	//   result = Math.round(degree * 10) / 10;
	//   return formatDegree(result);
	// }
}