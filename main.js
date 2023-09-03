import { loadingData } from "./get.js";
import { clickAddComent } from "./addComent.js";
//Поиск нужных тегов
export const buttonElement = document.getElementById("add-form-button");
export const sender = document.getElementById("add-form-name");
export const message = document.getElementById("add-form-text");

document.getElementsByClassName("loading")[1].style.display = 'none';
loadingData();
buttonElement.addEventListener("click", clickAddComent);

