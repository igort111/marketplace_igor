const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id') //вписываем название параметра который хотим получить

const profile = document.getElementById('profile');
const productsGrid = document.getElementById('user-products-grid');

let url = "https://my-json-server.typicode.com/igort111/WebMidSun14_igor";

let userRequest = new XMLHttpRequest;
userRequest.open('GET', `${url}/products/${id}`); // open - указываем на то что делает обЪект
userRequest.responseType = 'json'; // задаем тип данных

userRequest.onload = function() { // то что случится когда данные загрузятся
    let product = userRequest.response;
    profile.innerHTML = `
        <h2 class='product-name'>${product.name}</h2>
        <img class='product-photo' src='${product.photo}' alt='${p.name}'>
        <p class='product-price'><b>Price: </b>${product.price}BYN</p>
        <p class='product-description'><b>Description: </b>${product.desc}</p>
        <a href="userProfile.html?id=${product.author_id}">Seller profile</a>
        <button onclick ="addProductToCart(${product.id})">Buy</button>
        `;
}

userRequest.send();