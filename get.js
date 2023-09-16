import { render } from './render.js'
//Загрузка данных с БД
export const loadingData = () => {
    fetch('https://wedev-api.sky.pro/api/v2/andrey-ashlapov/comments', {
        method: 'GET',
    })
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error('Ошибка сервера, повторите попытку позже')
            }
        })
        .then((responseData) => {
            return responseData.comments.map((comment) => {
                return {
                    id: comment.id,
                    login_name: comment.author.login,
                    id_name: comment.author.id,
                    name: comment.author.name,
                    date: new Date(comment.date),
                    text: comment.text,
                    likes: comment.likes,
                    isLiked: comment.isLiked,
                }
            })
        })
        .then((appComment) => {
            render(appComment)
            document.getElementsByClassName('loading')[0].style.display = 'none'
        })
        .catch((error) => {
            alert('Ошибка')
            console.warn(error)
        })
}
