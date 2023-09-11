import { user } from "./main.js";
import { newUser } from "./main.js";

export const regist = () => {
    fetch("https://wedev-api.sky.pro/api/user",{
      method: "POST",
      body: JSON.stringify({
        login: document.getElementsByClassName("login")[0].value
            .replaceAll("<","&lt")
            .replaceAll(">","&gt"),
        name: document.getElementsByClassName("name")[0].value
            .replaceAll("<","&lt")
            .replaceAll(">","&gt"),
        password: document.getElementsByClassName("password")[0].value
            .replaceAll("<","&lt")
            .replaceAll(">","&gt"),
      })
    }).then((response)=> {
        if (response.status === 400) {
            throw new Error("Пользователь с таким логинам уже существует")
        } else {
            return response.json();
        };
    }).then((response)=> {
        console.log(response);
        newUser(response.user.name, response.user.token);

        document.getElementById("add-form-name").value = user[0];
        document.getElementsByClassName("add-form")[0].style.display = "flex";
    }).catch((error) => {
        alert("Произошла ошибка");
        console.warn(error);
    })};