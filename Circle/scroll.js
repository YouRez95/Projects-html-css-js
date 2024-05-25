const arrowIcons = document.querySelectorAll('.arrow__icons');

arrowIcons.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('fa-chevron-right')) {
            if (window.innerWidth < 800) {
                right(1)
            } else {
                right(3)
            }

        } else {
            if (window.innerWidth < 800) {
                left(1)
            } else {
                left(3)
            }
        }
    })
})

const aboutItems = document.querySelectorAll('.about__content-three-info');

let current = 0

function right(num) {
    if (current > -248 * (aboutItems.length) / 2) {
        current -= 248 * num
        aboutItems.forEach(item => {
            item.style.transform = `translateX(${current}px)`
            item.style.transition = "transform .5s"
        })
    } else {
        current = -248 * (aboutItems.length) / 2
    }
    console.log(current)

}


function left(num) {
    if (current < 0) {
        current += 248 * num
        aboutItems.forEach(item => {
            item.style.transform = `translateX(${current}px)`
            item.style.transition = "transform .5s"
        })
    } else {
        current = 0
    }
    console.log(current)
}