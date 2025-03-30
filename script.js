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

function addProductToCart(id){
  xhr.open('GET', `${url}/products/${id}`);
  xhr.responseType = "json";
  xhr.onload = function() {

  }
}
let cartproducts = document.getElementById("cart-products");

let cart = [];
if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'));
  DrawCartProducts();

}

function addProductToCart(id){
  let product = productsArray.find(function(p){
    return p.id == id;
  })
  cart.push(product);

  DrawCartProducts();

  localStorage.setItem('cart', JSON.stringify(cart));

  document.getElementById('cart-button').classList.add('active');
  setTimeout(function(){
    document.getElementById('cart-button').classList.remove('active');
  },500);
}

function DrawCartProducts(){
  if (cart.length === 0) return cartproducts.innerHTML = "cart is empty";
  cartproducts.innerHTML = null;
  let sum = 0;
  cart.forEach(function(p){
    cartproducts.innerHTML +=`
    <p><img src ="${p.photo}"> ${p.name} | ${p.price}BYN</p>
    <hr>
    `;
    sum += p.price;
  })
  cartproducts.innerHTML +=`
  <p>Total price: ${sum}BYN</p>
  <button onclick ="buyAll()">Buy All</button>
  `;
}

function buyAll(){
  cart = [];
  cartproducts.innerHTML = 'yes';
  localStorage.setItem('cart', '[]');

}
 function openCart(){
  cartproducts.classList.toggle('hide');
 }