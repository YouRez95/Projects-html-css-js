const photoIlustr = document.querySelector('.photo')

const coursesContent = document.querySelector('.courses__content')


const reviewsContent = document.querySelector('.review__content')

const program = document.getElementById("program")

window.addEventListener('scroll', () => {
    if (scrollY > program.offsetTop) {
        photoIlustr.style.position = "absolute"
    } else {
        photoIlustr.style.position = "fixed"
    }
    console.log(scrollY)
})


const courses = document.getElementById('courses')

window.addEventListener('scroll', () => {
    if (scrollY > courses.offsetTop) {
        coursesContent.style.position = "absolute"
    } else {
        coursesContent.style.position = "fixed"
    }
})


const reviewsPage = document.getElementById('reviews');
window.addEventListener('scroll', () => {
    reviewsPage.offsetTop
    if (scrollY > reviewsPage.offsetTop) {
        reviewsContent.style.position = "absolute"
    } else {
        reviewsContent.style.position = "fixed"
    }
    // console.log(scrollY)
})

