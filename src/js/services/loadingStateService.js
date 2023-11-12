import { dynamicData } from '../modules/constants'

export const setLoadingState = async () => {
  // seachCityInput.blur();

  for (let index = 0; index < dynamicData.length; index++) {
    dynamicData[index].classList.add("loading");
  }
}

export const unsetLoadingState = async () => {
  for (let index = 0; index < dynamicData.length; index++) {
    dynamicData[index].classList.remove("loading");
    // console.log(index);
  }
}