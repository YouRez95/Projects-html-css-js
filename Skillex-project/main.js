const headerPage = document.querySelector('.header__page');

const para = document.querySelector('.info__left p');
const infoOne = document.querySelector('.info__one')

const articles = document.querySelectorAll('.article');


window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        headerPage.classList.add('barFixed');
    } else {
        headerPage.classList.remove('barFixed');
    }
})



window.addEventListener('DOMContentLoaded', () => {
    para.classList.add('para__onload')
    articles.forEach(article => {
        article.classList.add('para__onload')
    })
    articles[0].classList.add('hover')
})


articles.forEach(article => {
    article.addEventListener('mouseenter', () => {
        infoOne.classList.add("visibility")
        articles[0].classList.remove('hover')
        article.classList.add('hover')
        article.style.transition = "width .4s"

    })
    article.addEventListener('mouseleave', () => {
        infoOne.classList.remove("visibility")
        article.classList.remove('hover')
        articles[0].classList.add('hover')
    })
})

articles[0].addEventListener('mouseenter', () => {
    infoOne.classList.remove("visibility")
    infoOne.style.transition = "visibility .2s"
})


/*==============NAVBAR================*/

const navbarContent = document.querySelector('.navbar__content');
const menuOpen = document.querySelector('.menu__open');
const menuClose = document.querySelector('.menu__close');

const Navbar = document.querySelector('.navbar');
const login = document.querySelector('.login')

function NavbarHidden() {
    navbarContent.classList.remove('height');
    Navbar.classList.add('opacity');
    login.classList.add('opacity');
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block'
    document.body.style.overflow = 'visible';
}

menuOpen.addEventListener('click', () => {
    navbarContent.classList.add('height');
    Navbar.classList.remove('opacity');
    login.classList.remove('opacity');
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
    document.body.style.overflow = 'hidden';
})

menuClose.addEventListener('click', () => {
    NavbarHidden()

})

document.addEventListener('click', (e) => {
    if (window.innerWidth < 900) {
        if (e.target.tagName === "A" || e.target.tagName === "SPAN") {
            NavbarHidden()
        }
    }
})
