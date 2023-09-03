
import { buttonElement } from "./main.js";
import { addComentEvent } from "./addComentEvent.js";
//Функция рендера
export const render = (comment) => {
    const commentsHtml = comment.map((people, id) =>{ 
      return `<li class="comment" data-comment="${people.text}" data-name="${people.name}">
                <div class="comment-header">
                  <div>${people.name}</div>
                  <div>${people.date.getDate()}.${people.date.getMonth() + 1}.${people.date.getFullYear().toString().substr(-2)} ${people.date.getHours()}:${people.date.getMinutes()}</div>
                </div>
                <div class="comment-body">
                  <div class="comment-text">${people.text}</div>
                </div>
                <div class="comment-footer">
                  <div class="likes">
                    <span class="likes-counter">${people.likes}</span>
                    <button data-index="${id}" class="like-button ${people.isLiked}"></button>
                  </div>
                </div>
              </li>`
    }).join('');
  
    document.getElementById('comments').innerHTML = commentsHtml;
  
    buttonElement.disabled = false;
    document.getElementsByClassName("loading")[1].style.display = 'none';
    addComentEvent();
  }