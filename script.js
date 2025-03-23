let productsgrid = document.getElementById("products-grid");
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = "https://my-json-server.typicode.com/igort111/WebMidSun14_igor";
xhr.open('GET', url + "/products");
xhr.responseType = "json";
xhr.onload = function () {
  productsArray = xhr.response;
  productsgrid.innerHTML = null;
  productsArray.forEach(p => {
    let pElem = document.createElement("div");
    pElem.classList.add("product");

    pElem.innerHTML = `
        <h2 class='product-name'>${p.name}</h2>
        <img class='product-photo' src='${p.photo}' alt='${p.name}'>
        <p class='product-price'><b>Price: </b>${p.price}BYN</p>
        <p class='product-description'><b>Description: </b>${p.desc}</p>
        <button onclick ="addProductToCart(${p.id})">Buy</button>
        `;
    productsgrid.append(pElem);
  });
}
xhr.send();
