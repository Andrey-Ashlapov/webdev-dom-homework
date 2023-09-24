import { loadingData } from './get.js'
import { clickAddComent } from './addComent.js'
import { authorization } from './authorization.js'
import { regist } from './reg.js'

export const user = []
export const newUser = (name, token) => {
    user[0] = name
    user[1] = token
}
//Поиск нужных тегов
export const buttonElement = document.getElementById('add-form-button')
export const sender = document.getElementById('add-form-name')
export const message = document.getElementById('add-form-text')

const authoriz = document.getElementsByClassName('authorization')[0]

document.getElementsByClassName('loading')[1].style.display = 'none'
loadingData()
buttonElement.addEventListener('click', clickAddComent)
document.getElementsByClassName('autho')[0].style.display = 'none'

document.getElementById('addAuthoBlock').addEventListener('click', () => {
    document.getElementsByClassName('autho')[0].style.display = 'block'
    document.getElementsByClassName('name')[0].style.display = 'none'
    authoriz.firstChild.data = 'Войти'
})

document.getElementById('cancelAutho').addEventListener('click', () => {
    document.getElementsByClassName('autho')[0].style.display = 'none'
})

document.getElementById('addRegBlock').addEventListener('click', () => {
    document.getElementsByClassName('autho')[0].style.display = 'block'
    document.getElementsByClassName('name')[0].style.display = 'block'
    authoriz.firstChild.data = 'Зарегистрироваться'
})

document.getElementById('TB_overlay').addEventListener('click', () => {
    document.getElementsByClassName('autho')[0].style.display = 'none'
})

authoriz.addEventListener('click', () => {
    document.getElementsByClassName('autho')[0].style.display = 'none'
    if (authoriz.firstChild.data === 'Зарегистрироваться') {
        regist()
    } else {
        authorization()
    }
})
