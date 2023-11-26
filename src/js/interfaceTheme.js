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