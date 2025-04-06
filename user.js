const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id') //вписываем название параметра который хотим получить

const profile = document.getElementById('profile');
const productsGrid = document.getElementById('user-products-grid');

let url = "https://my-json-server.typicode.com/igort111/WebMidSun14_igor";

let userRequest = new XMLHttpRequest;
userRequest.open('GET', `${url}/users/${id}`); // open - указываем на то что делает обЪект
userRequest.responseType = 'json'; // задаем тип данных

userRequest.onload = function() { // то что случится когда данные загрузятся
    let user = userRequest.response; // получаем данные из json

    profile.innerHTML = `
    <h1>${user.name}</h1>
    <h2>${user.surname}</h2>
    <img class ="profile-img" src="${user.photo}">
    <p>Balance: ${user.balance}$</p>    `
}

userRequest.send();

let productsRequest = new XMLHttpRequest;
productsRequest.open('GET', `${url}/products?author_id=${id}`); // open - указываем на то что делает обЪект
productsRequest.responseType = 'json'; // задаем тип данных

productsRequest.onload = function() { // то что случится когда данные загрузятся
    let products = productsRequest.response; // получаем данные из json
    productsGrid.innerHTML = null;
    products.forEach(product =>{
        productsGrid.innerHTML +=`
        <div class = "product">
        <h2 class= "product-name">${product.name}</h2>
        <img class = "product-photo" src="${product.photo}" alt=""${product.name}>
        <p class = "product-price"><b>Price: </b>${product.price}$</p>
        <p class = "product-description"><b>Description: </b>${product.desc}</p>
        </div>
        `
    })

}

productsRequest.send();