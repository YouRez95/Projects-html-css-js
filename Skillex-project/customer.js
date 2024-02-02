const customerItems = document.querySelector('.customer__items');

const dataCustomer = [
    {
        info: "The explanations are clear, the teachers are responsible and friendly, and the homework is real practice",
        img: "./images/customer1.jpg",
        name: "Emma Watson",
        card: "Cook"
    },
    {
        info: "I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client",
        img: "./images/customer2.jpg",
        name: "Melanie Pickett",
        card: "IT Manager"
    },
    {
        info: "I really like the speakers of the course and the quality of the lectures. There is always feedback",
        img: "./images/customer3.jpg",
        name: "Regis Wilson",
        card: "Engineer"
    },
    {
        info: "A new profession is a lot of vivid impressions. Today I was at the presentation of the regional business award",
        img: "./images/customer4.jpg",
        name: "Emma Watson",
        card: "Cook"
    },
    {
        info: "The explanations are clear, the teachers are responsible and friendly, and the homework is real practice",
        img: "./images/customer5.jpg",
        name: "Alfred Stone",
        card: "Analyst"
    },
    {
        info: "The course shows all the stages of the work of an SMM marketer. And also excellent practice in Developer",
        img: "./images/customer6.jpg",
        name: "Chris Hemsworth",
        card: "Developer"
    },
    {
        info: "The explanations are clear, the teachers are responsible and friendly, and the homework is real practice",
        img: "./images/customer7.jpg",
        name: "Emma Watson",
        card: "Cook"
    },
    {
        info: "The explanations are clear, the teachers are responsible and friendly, and the homework is real practice",
        img: "./images/customer3.jpg",
        name: "Laura Fopi",
        card: "Design"
    },
    {
        info: "For several months I studied one of the most popular programming languages on the course Java developer",
        img: "./images/customer6.jpg",
        name: "Yohan Vok",
        card: "Developer"
    },

]


const dataItem = dataCustomer.map(item => {
    return `<div class="customer__item">
    <p class="customer__info">${item.info}</p>
    <div class="customer__person">
        <img src=${item.img} alt="customer_one">
        <div class="info__profil">
            <h2>${item.name}</h2>
            <h3>${item.card}</h3>
        </div>
    </div>
</div>`
})

customerItems.innerHTML = dataItem.join("")





const arrows = document.querySelectorAll('.bx-arrow-back');
const customerItem = document.querySelectorAll('.customer__item');
arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        if (e.target.classList.contains('arrow__next')) {
            if (window.innerWidth < 800) {
                next(1)
            } else {
                next(3)
            }
        }

        else {
            if (window.innerWidth < 800) {
                prev(1)
            } else {
                prev(3)
            }
        }
    })
})

let currentTranslate = 0
function next(prop) {
    currentTranslate -= 282 * prop
    const currentMax = 250 * customerItem.length
    customerItem.forEach(item => {
        if (currentTranslate > -currentMax) {
            item.style.transform = `translateX(${currentTranslate}px)`
            item.style.transition = "transform .5s"
            console.log(currentTranslate)
        } else {
            currentTranslate = -currentMax
        }
    })
}


function prev(prop) {
    currentTranslate += 282 * prop
    customerItem.forEach(item => {
        if (currentTranslate < 0) {
            item.style.transform = `translateX(${currentTranslate}px)`
            console.log(currentTranslate)
        } else {
            item.style.transform = `translateX(0px)`
            return currentTranslate = 0
        }
    })


}



