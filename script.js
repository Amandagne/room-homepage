const carousel = [
    {
        id:1,
        img: "images/desktop-image-hero-1.jpg",
        h: "Discover innovative ways to decorate",
        body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        link: "Shop now"
    },
    {
        id:2,
        img: "images/desktop-image-hero-2.jpg",
        h: "We are available all across the globe",
        body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        link: "Shop now"
    },
    {
        id:3,
        img: "images/desktop-image-hero-3.jpg",
        h: "Manufactured with the best materials",
        body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        link: "Shop now"

    }
]

const carouselMobile = [
    {
        id: 1,
        img: "images/mobile-image-hero-1.jpg",

    },
    {
        id:2,
        img: "images/mobile-image-hero-2.jpg"
    },
    {
        id:3,
        img: "images/mobile-image-hero-3.jpg"
    }
]
const img = document.querySelector("#img")
const heading = document.querySelector("#heading")
const text = document.querySelector("#text")
const link = document.querySelector("#link")

const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")

let currentItem = 0
let currentMobileItem = 0
function showCarousel(){
    const mobileItem = carouselMobile[currentMobileItem]
    const item = carousel[currentItem]
    img.style.backgroundImage = `url(${item.img})`
    img.style.backgroundSize = "cover"
    heading.innerHTML = item.h
    text.innerHTML = item.body
    link.innerHTML = item.link + `<img src="images/icon-arrow.svg" alt="icon arrow" />`
    

    
    if(window.screen.width <= 375 && window.screen.width <= 480){
        heading.innerHTML = item.h
        text.innerHTML = item.body
        link.innerHTML = item.link + `<img src="images/icon-arrow.svg" alt="icon arrow" />`
        img.style.backgroundImage = `url(${mobileItem.img})`
        img.style.backgroundSize = "cover"
        }   
}
showCarousel()
leftArrow.addEventListener('click', () => {
    currentItem--
    currentMobileItem--
    if(currentItem < 0){
        currentItem = carousel.length -1;
    }
    if(currentMobileItem < 0){
        currentMobileItem = carouselMobile.length - 1
    }
    showCarousel()
})
rightArrow.addEventListener('click', () =>{
    currentItem++
    currentMobileItem++
    if(currentItem > carousel.length - 1){
        currentItem = 0;
    }
    if(currentMobileItem > carouselMobile.length - 1){
        currentMobileItem = 0
    }
    showCarousel()
})


// hamburger menu controls
const bar = document.querySelector(".bar")
const nav = document.querySelector("#nav")
const close = document.querySelector("#close")

if(bar){
    bar.addEventListener("click", () =>{
        nav.classList.add("active")
    })
}
if(close){
    close.addEventListener("click", () =>{
        nav.classList.remove("active")
    })
}

