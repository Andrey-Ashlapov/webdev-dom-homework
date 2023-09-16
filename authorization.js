import { user } from './main.js'
import { newUser } from './main.js'
import { sender } from './main.js'

export const authorization = () => {
    fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            login: document
                .getElementsByClassName('login')[0]
                .value.replaceAll('<', '&lt')
                .replaceAll('>', '&gt'),
            password: document
                .getElementsByClassName('password')[0]
                .value.replaceAll('<', '&lt')
                .replaceAll('>', '&gt'),
        }),
    })
        .then((response) => {
            if (response.status === 400) {
                throw new Error('Введен неверный логин или пароль')
            } else {
                return response.json()
            }
        })
        .then((response) => {
            console.log(response)
            newUser(response.user.name, response.user.token)

            sender.value = user[0]
            document.getElementsByClassName('add-form')[0].style.display =
                'flex'
        })
        .catch((error) => {
            alert('Произошла ошибка')
            console.warn(error)
        })
}
