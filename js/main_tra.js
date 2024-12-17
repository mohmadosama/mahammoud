let lis = document.querySelectorAll("#tap a");

chooise_tap = function (tap_url){
    lis.forEach( (li) => {
    document.querySelector(li).classList.remove("link-secondary");
    });
    document.querySelector("#"+tap_url).classList.add("link-secondary");
}

home = "home.html";
product = "product.html";
contact_us = "contact_us.html";
about_us = "about_us.html";
url = document.URL;
page_now = "";
if (url.endsWith(home)) {
    page_now = home;
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
else{
    document.location = "error.html";
}
// console.log(page_now);
chooise_tap(page_now.substr(0,page_now.search("html")-1));