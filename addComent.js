import { buttonElement } from "./main.js";
import { sender } from "./main.js";
import { message } from "./main.js";
import { loadingData } from "./get.js";

export const clickAddComent = () => {
    //Проверка на пустые поля
    if (sender.value === "" || message.value === "") {
      return;
    }
  
    buttonElement.disabled = true;
    document.getElementsByClassName("loading")[1].style.display = 'inline-block';
    const date = new Date();
  
    fetch("https://wedev-api.sky.pro/api/v1/andrey-ashlapov/comments",{
      method: "POST",
      body: JSON.stringify({
        date: date,
        likes: 0,
        isLiked: false,
        name: sender.value
          .replaceAll("<","&lt")
          .replaceAll(">","&gt"),
        text: message.value
          .replaceAll("<","&lt")
          .replaceAll(">","&gt")
          .replaceAll("QUOTE_BEGIN", "<blockquote>")
          .replaceAll("QUOTE_END", "</blockquote>"),
      })
    })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        throw new Error("Ошибка  данные")
      }
    })
    .then(() => {
        sender.value = "";
        message.value = "";
        loadingData();
        document.getElementsByClassName("loading")[1].style.display = 'none';
        buttonElement.disabled = false;
    })
    .catch((error) => {
        alert("Ошибка проверьтe введеные данные");
        console.warn(error);
        document.getElementsByClassName("loading")[1].style.display = 'none';
        buttonElement.disabled = false;
    });
}