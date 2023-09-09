import { loadingData } from "./get.js";
import { clickAddComent } from "./addComent.js";
import { authorization } from "./authorization.js";
//Поиск нужных тегов
export const buttonElement = document.getElementById("add-form-button");
export const sender = document.getElementById("add-form-name");
export const message = document.getElementById("add-form-text");

document.getElementsByClassName("loading")[1].style.display = 'none';
loadingData();
buttonElement.addEventListener("click", clickAddComent);
document.getElementsByClassName("autho")[0].style.display = 'none';

document.getElementById("addAuthoBlock").addEventListener("click", () => {
    document.getElementsByClassName("autho")[0].style.display = 'block';
    document.getElementsByClassName("name")[0].style.display = 'none';
    document.getElementsByClassName("authorization")[0].firstChild.data = 'Войти';
})

document.getElementById("cancelAutho").addEventListener("click", () => {
    document.getElementsByClassName("autho")[0].style.display = 'none';
})

document.getElementById("addRegBlock").addEventListener("click", () => {
    document.getElementsByClassName("autho")[0].style.display = 'block';
    document.getElementsByClassName("name")[0].style.display = 'block';
    document.getElementsByClassName("authorization")[0].firstChild.data = 'Зарегистрироваться';
})

document.getElementById("TB_overlay").addEventListener("click", () => {
    document.getElementsByClassName("autho")[0].style.display = 'none';
})

document.getElementById("authorization").addEventListener("click", () => {
    document.getElementsByClassName("autho")[0].style.display = 'none';
    authorization();
})

