//Поставить или убрать лайк
export const buttonsLike = () => {
    const buttonsLikeElement = document.querySelectorAll(`.like-button`)

    for (const buttonLikeElement of buttonsLikeElement) {
        buttonLikeElement.addEventListener('click', (event) => {
            event.stopPropagation()
            const index = buttonLikeElement.dataset.index
            if (comments[index].like === `-active-like`) {
                comments[index].quantityLikes--
                comments[index].like = ``
            } else {
                comments[index].quantityLikes++
                comments[index].like = `-active-like`
            }
            render()
        })
    }
}
