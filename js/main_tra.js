let lis = document.querySelectorAll("#tap a");

chooise_tap = function (tap_url){
    lis.forEach( (li) => {
    document.querySelector(li).classList.remove("link-secondary");
    });
    document.querySelector("#"+tap_url).classList.add("link-secondary");
}

home = "index.html";
product = "product.html";
contact_us = "contact_us.html";
about_us = "about_us.html";
faq = "faq.html";
basket = "basket.html";
url = document.URL;
page_now = "";


// else{
//     document.location = "error.html";
// }
// console.log(page_now);


function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'basket.html';
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const tableBody = document.getElementById('cart-items');

    tableBody.innerHTML = '';

    cart.forEach((item, index) => {
        const row = `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger" onclick="removeItem(${index})">Remove</button>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload cart
}



if (url.endsWith(home) ) {
    page_now = "home.html";
    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
      }
} 
else if(url.endsWith(product)) {
    page_now = product;
    
}
else if(url.endsWith(contact_us)) {
    page_now = contact_us;
}
else if(url.endsWith(about_us)) {
    page_now = about_us;
}
else if(url.endsWith(faq)) {
    page_now = faq;
}
else if(url.endsWith(basket)) {
    page_now = basket;
    window.onload = loadCart;
}
chooise_tap(page_now.substr(0,page_now.search("html")-1));

window.addEventListener("error", function(event) {
    window.location.href = "error.html"; 
   });
