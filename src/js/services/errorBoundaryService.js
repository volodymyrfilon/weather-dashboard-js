// import { unsetLoadingState } from "./loadingStateService.js"

export const errorBoundary = async (error, event) => {
  // const alert = document.querySelector('.modal__alert');
  // const alertBtn = alert.querySelector('button');
  // const alertMessage = alert.querySelector(".modal__alert-descr");

  // function closeAlert() {
  //   searchCityInput.value = "";
  //   searchCityInput.focus();

  //   alert.classList.remove('show');
  // }

  // alertMessage.innerHTML = error;
  // alert.classList.add('show');
	alert(error);
  // unsetLoadingState();

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      // closeAlert();
      console.log("zaaazazaaza");
      
    }
  })

  // if (event === "Refresh Page") {
  //   alertButton.addEventListener("click", () => {
  //     location.reload();
  //   });
  // } else {
  //   alertBtn.addEventListener('click', closeAlert);
  // }
}

