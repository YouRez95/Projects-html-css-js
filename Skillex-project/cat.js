const categories = [
    {
        id: 1,
        name: "Food",
        img: "./images/food1.jpg",
        title: "Food One",
        span: "2 month"
    },
    {
        id: 2,
        name: "Lifestyle",
        img: "./images/lifestyle1.jpg",
        title: "Lifestyle One",
        span: "1 month"
    },
    {
        id: 3,
        name: "Writing",
        img: "./images/writing1.jpg",
        title: "Writing One",
        span: "4 month"
    },
    {
        id: 4,
        name: "Business",
        img: "./images/business1.jpg",
        title: "Business One",
        span: "2 month"
    },
    {
        id: 5,
        name: "Lifestyle",
        img: "./images/lifestyle2.jpg",
        title: "Lifestyle Two",
        span: "6 month"
    },
    {
        id: 6,
        name: "Entertainement",
        img: "./images/entertainement1.jpg",
        title: "Entertainement One",
        span: "2 month"
    },
    {
        id: 7,
        name: "Business",
        img: "./images/business2.jpg",
        title: "Business Two",
        span: "4 month"
    },
    {
        id: 8,
        name: "Entertainement",
        img: "./images/entertainement2.jpg",
        title: "Entertainement Two",
        span: "1 month"
    },
    {
        id: 9,
        name: "Writing",
        img: "./images/writing2.jpg",
        title: "Writing Two",
        span: "3 month"
    },
    {
        id: 10,
        name: "Food",
        img: "./images/food2.jpg",
        title: "Food Two",
        span: "4 month"
    },
]

const categoriesImagesDiv = document.querySelector('.categories__images');

const categoriesUl = document.querySelector('.categories ul');


// MAPING CATEGORIES WITH PROP
function menuCategories(prop) {
    prop.map(categorieMenu => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.innerText = categorieMenu
        li.appendChild(a)
        categoriesUl.appendChild(li)
    })
}

// REDUCE MENU 
const allMenu = categories.reduce((value, categorie) => {
    if (!value.includes(categorie.name)) {
        value.push(categorie.name)
    }
    return value
}, ["All Categories"])

menuCategories(allMenu)


// maping images In Dom with filter
const categoriesLi = categoriesUl.querySelectorAll('li');

function catDom(prop) {
    const categoriesMaping = prop.map(categorie => {
        return `<div class="images">
        <div class="img__content" style="height: 300px" ;>
            <i class='bx bx-up-arrow-alt'></i>
            <img src=${categorie.img} alt="${categorie.id}">
        </div>
        <h3>${categorie.title}</h3>
        <span>${categorie.span}</span>
    </div>`
    })
    categoriesImagesDiv.innerHTML = categoriesMaping.join("")
}


categoriesLi.forEach(li => {
    li.addEventListener('click', () => {
        const childrenUl = li.parentNode.children
        for (let i = 0; i < childrenUl.length; i++) {
            childrenUl[i].firstChild.classList.remove('active')
        }
        li.firstChild.classList.add('active')
        const categoriesFiltred = categories.filter(item => {
            if (li.innerText === item.name) {
                return item
            }
        })
        if (li.innerText === "All Categories") {
            catDom(categories)
        } else {
            catDom(categoriesFiltred)
        }
    })
})


window.addEventListener('DOMContentLoaded', () => {
    catDom(categories)
    categoriesLi[0].firstChild.classList.add('active')

})