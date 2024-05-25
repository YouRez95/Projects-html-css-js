// NAVBAR


const menu = document.querySelector(".menu__open");

const navbarContent = document.querySelector('.navbar__items');


menu.addEventListener('click', (e) => {
    console.log(e.target)
    if (menu.classList.contains('fa-bars')) {
        navbarContent.style.left = "0%"
        menu.setAttribute('class', "fa-solid fa-xmark")
    } else {
        navbarContent.style.left = "-100%"
        menu.setAttribute('class', "fa-solid fa-bars")
    }

})


navbarContent.addEventListener('click', (e) => {
    if (e.target.tagName === "A" || e.target.tagName === "SPAN") {
        navbarContent.style.left = "-100%"
        menu.setAttribute('class', "fa-solid fa-bars")
    }
})

// SEARCH


const searchLabel = document.querySelector('.input__label .input')

const searchBtn = document.querySelector('.input__label label i')



searchBtn.addEventListener('click', () => {
    searchLabel.classList.toggle('input__right')
})

searchLabel.addEventListener('click', (e) => {
    if (e.target.classList.contains('input__right')) {
        searchLabel.classList.remove('input__right')
    }
})