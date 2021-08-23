// dynamic burger nav bar
var burgerbtn = document.querySelector("#nav-burger-icon");
var navitems = document.querySelectorAll("div.nav-item");
var closeNavIcon = document.querySelector("#close-nav");

// expanding nav bar
burgerbtn.addEventListener("click", function () {
    document.querySelector("#navbar-container").classList.remove("navbar-container");
    document.querySelector("#navbar-container").classList.add("navbar-container-mobile");

    // add class nav-item to close-nav div
    closeNavIcon.classList.add("nav-item-drop-down");

    navitems.forEach(e => {
        e.classList.remove("nav-item");
        e.classList.add("nav-item-drop-down");
    });

    // add close nav icon
    var closeNavHtml = `
    <i class="fas fa-bars" id="nav-burger-icon-close"></i>
    `
    document.querySelector("#close-nav").innerHTML = closeNavHtml;
});

// closing nav bar
closeNavIcon.addEventListener("click", function() {
    document.querySelector("#navbar-container").classList.remove("navbar-container-mobile");
    document.querySelector("#navbar-container").classList.add("navbar-container");

    // remove the close nav icon
    var closeNavHtml = ``
    document.querySelector("#close-nav").innerHTML = closeNavHtml;

    navitems.forEach(e => {
        e.classList.remove("nav-item-drop-down");
        e.classList.add("nav-item");
    });
    
    // remove class nav-item to close-nav div
    closeNavIcon.classList.remove("nav-item-drop-down");

});
