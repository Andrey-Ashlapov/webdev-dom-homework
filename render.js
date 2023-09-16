import { buttonElement } from './main.js'
import { addComentEvent } from './addComentEvent.js'
import { format } from 'date-fns'

//Функция рендера
export const render = (comment) => {
    const commentsHtml = comment
        .map((people, id) => {
            const createDate = format(people.date, 'yyyy-MM-dd hh.mm.ss')
            return `<li class="comment" data-comment="${people.text}" data-name="${people.name}" data-id="${people.id_name}">
                <div class="comment-header">
                  <div>${people.name}</div>
                  <div>${createDate}</div>
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
        })
        .join('')

    document.getElementById('comments').innerHTML = commentsHtml

    buttonElement.disabled = false
    document.getElementsByClassName('loading')[1].style.display = 'none'
    addComentEvent()
}
