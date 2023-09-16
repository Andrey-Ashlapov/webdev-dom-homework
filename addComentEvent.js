import { message } from './main.js'
//Выбор коментария
export const addComentEvent = () => {
    const addCommentElements = document.querySelectorAll('.comment')

    for (const addComment of addCommentElements) {
        addComment.addEventListener('click', () => {
            const dataName = addComment.dataset.name
            const dataComment = addComment.dataset.comment

            const addForm = `QUOTE_BEGIN ${dataComment}\n${dataName} QUOTE_END`
            message.value = addForm
        })
    }
}
