import { buttonElement } from './main.js'
import { sender } from './main.js'
import { message } from './main.js'
import { loadingData } from './get.js'
import { user } from './main.js'

export const clickAddComent = () => {
    //Проверка на пустые поля
    if (sender.value === '' || message.value === '') {
        return
    }

    buttonElement.disabled = true
    document.getElementsByClassName('loading')[1].style.display = 'inline-block'
    const date = new Date()

    fetch('https://wedev-api.sky.pro/api/v2/andrey-ashlapov/comments', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + user[1],
        },
        body: JSON.stringify({
            text: message.value
                .replaceAll('<', '&lt')
                .replaceAll('>', '&gt')
                .replaceAll('QUOTE_BEGIN', '<blockquote>')
                .replaceAll('QUOTE_END', '</blockquote>'),
        }),
    })
        .then((response) => {
            switch (response.status) {
                case 201:
                    return response.json()
                    break
                case 400:
                    buttonElement.disabled = false
                    document.getElementsByClassName(
                        'loading'
                    )[1].style.display = 'none'
                    throw new Error('Ошибка, проверьте введеные данные')
                    break
                case 500:
                    buttonElement.disabled = false
                    document.getElementsByClassName(
                        'loading'
                    )[1].style.display = 'none'
                    throw new Error('Ошибка сервера')
                    break
            }
        })
        .then(() => {
            message.value = ''
            loadingData()
            document.getElementsByClassName('loading')[1].style.display = 'none'
            buttonElement.disabled = false
        })
        .catch((error) => {
            alert('Ошибка проверьтe введеные данные')
            console.warn(error)
            document.getElementsByClassName('loading')[1].style.display = 'none'
            buttonElement.disabled = false
        })
}
