const menuBtn = document.querySelector('.show-menu-button')

menuBtn.addEventListener('click', () => {
    document.querySelector('.menu-slide-out').classList.remove('hide')
})

const closeMenuBtn = document.querySelector('.close-menu-button')

closeMenuBtn.addEventListener('click', () => {
    document.querySelector('.menu-slide-out').classList.add('hide')
})