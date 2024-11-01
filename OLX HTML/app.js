document.getElementById('categoryToggle').addEventListener('click', function () {
    const list = document.getElementById('selected')
    list.style.display = list.style.display === "block" ? "none" : "block"
    this.querySelector('p').classList.toggle('active');
});

$(document).ready(function () {
    $('#slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    });

    // Add images to the slider
    for (let i = 0; i < 3; i++) {
        $('#slider').slick('slickAdd', '<div><img src="./images/slide.png" alt="Slide image"></div>');
    }
});









const categories = [
    { id: 1, name: "Mobiles", image: "./images/categories.png" },
    { id: 2, name: "Cars", image: "./images/categories.png" },
    { id: 3, name: "Motorcycles", image: "./images/categories.png" },
    { id: 4, name: "Houses", image: "./images/categories.png" },
    { id: 5, name: "Video-Audios", image: "./images/categories.png" },
    { id: 6, name: "Tablets", image: "./images/categories.png" },
    { id: 7, name: "Tablets", image: "./images/categories.png" },
    { id: 8, name: "Tablets", image: "./images/categories.png" },
    { id: 9, name: "Tablets", image: "./images/categories.png" },
    { id: 10, name: "Tablets", image: "./images/categories.png" },
    { id: 11, name: "Tablets", image: "./images/categories.png" },
    { id: 12, name: "Tablets", image: "./images/categories.png" },
    { id: 13, name: "Tablets", image: "./images/categories.png" },
    { id: 14, name: "Tablets", image: "./images/categories.png" },
];

const categoryContainer = document.getElementById('categoryContainer');

categories.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'categories-content';
    categoryDiv.innerHTML = `
        <img src="${category.image}" alt="${category.name}" />
        <span>${category.name}</span>
    `;
    categoryContainer.appendChild(categoryDiv);
});





const ProductItems = [
    {
        id: 1,
        name: "Samsung Note 20 Ultra 5G",
        price: "170,000",
        address: "University Road, Sargodha",
        days: "2 days ago",
        image: "./images/cards.webp"
    },
    {
        id: 2,
        name: "Samsung Note 20 Ultra 5G",
        price: "170,000",
        address: "University Road, Sargodha",
        days: "2 days ago",
        image: "./images/cards.webp"
    },
    {
        id: 3,
        name: "Samsung Note 20 Ultra 5G",
        price: "170,000",
        address: "University Road, Sargodha",
        days: "2 days ago",
        image: "./images/cards.webp"
    },
    {
        id: 4,
        name: "Samsung Note 20 Ultra 5G",
        price: "170,000",
        address: "University Road, Sargodha",
        days: "2 days ago",
        image: "./images/cards.webp"

    },
]

const cards = document.getElementById('myCards')
ProductItems.forEach(newCards => {
    const cardsDiv = document.createElement('div');
    cardsDiv.className = "cards"
    cardsDiv.innerHTML = `<img src="${newCards.image}"/>
    <div class='card-sec'>
    <div class='rate'>
        <p>${newCards.price}</p>
    </div>
    <div class='product-details'>
        <p>${newCards.name}</p>
        <span>${newCards.address}</span>
        <span>${newCards.days}</span>
    </div>
</div>
    `

    cards.appendChild(cardsDiv)
})

ProductItems.forEach(newCards => {
    const cardsDiv = document.createElement('div');
    cardsDiv.className = "cards"
    cardsDiv.innerHTML = `<img src="${newCards.image}"/>
    <div class='card-sec'>
    <div class='rate'>
        <p>${newCards.price}</p>
    </div>
    <div class='product-details'>
        <p>${newCards.name}</p>
        <span>${newCards.address}</span>
        <span>${newCards.days}</span>
    </div>
</div>
    `

    cards.appendChild(cardsDiv)
})

ProductItems.forEach(newCards => {
    const cardsDiv = document.createElement('div');
    cardsDiv.className = "cards"
    cardsDiv.innerHTML = `<img src="${newCards.image}"/>
    <div class='card-sec'>
    <div class='rate'>
        <p>${newCards.price}</p>
    </div>
    <div class='product-details'>
        <p>${newCards.name}</p>
        <span>${newCards.address}</span>
        <span>${newCards.days}</span>
    </div>
</div>
    `
    cards.appendChild(cardsDiv)
})

