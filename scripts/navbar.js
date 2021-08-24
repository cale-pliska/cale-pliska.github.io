// dynamic burger nav bar
var burgerBtn = document.querySelector("#nav-burger-icon");
//find all nav-item css classes attached to a div, store in array
var navItems = document.querySelectorAll("div.nav-item");
//grab div id that will be used to close the expanded nav bar
var closeNavIcon = document.querySelector("#close-nav");

// expanding nav bar in a mobile style on click
burgerBtn.addEventListener("click", function () {
    //switch css classes from web to mobile
    document.querySelector("#navbar-container").classList.remove("navbar-container");
    document.querySelector("#navbar-container").classList.add("navbar-container-mobile");

    // populate close nav icon with html and add css so it acts like a nav-item on mobile
    var closeNavHtml = 
    `
    <i class="fas fa-bars" id="nav-burger-icon-close"></i>
    `;
    closeNavIcon.innerHTML = closeNavHtml;
    // add class nav-item to close-nav div - this is the icon users use to close the nav menue
    closeNavIcon.classList.add("nav-item-drop-down");

    // loop through items in navItems array and change css classes from web to mobile
    navItems.forEach(e => {
        e.classList.remove("nav-item");
        e.classList.add("nav-item-drop-down");
    });
});

// closing nav bar when you click the closeNavIcon
closeNavIcon.addEventListener("click", function() {
    //loop through items in navItems array and change css classes from mobile to web
    navItems.forEach(e => {
        e.classList.remove("nav-item-drop-down");
        e.classList.add("nav-item");
    });

    // empty close nav icon with html and add css so it acts like a nav-item on web
    // empty the close nav icon html
    closeNavIcon.innerHTML = '';
    // remove class nav-item to close-nav div
    closeNavIcon.classList.remove("nav-item-drop-down");

    // switch css classes from mobile to web
    document.querySelector("#navbar-container").classList.remove("navbar-container-mobile");
    document.querySelector("#navbar-container").classList.add("navbar-container");
});
