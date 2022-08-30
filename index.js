let searchForm = document.querySelector('.search-form')
let searchBtn = document.querySelector('#search-btn')
searchBtn.addEventListener('click',()=>{
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    formCard.classList.remove('active')
    shoppingCart.classList.remove('active')
})

let shoppingCart = document.querySelector('.shopping-cart')
let cartBtn = document.querySelector('#cart-btn')
cartBtn.addEventListener('click',()=>{
    searchForm.classList.remove('active')
    shoppingCart.classList.toggle('active')
    navbar.classList.remove('active')
    formCard.classList.remove('active')
})

let formCard = document.querySelector('.login-form')
document.querySelector('#login-btn').addEventListener('click',()=>{
    formCard.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navbar.classList.remove('active')
})


let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').addEventListener('click',()=>{
    navbar.classList.toggle('active')
    formCard.classList.remove('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
})


window.onscroll = ()=>{
    navbar.classList.remove('active')
    formCard.classList.remove('active')
    shoppingCart.classList.remove('active')
    searchForm.classList.remove('active')
}