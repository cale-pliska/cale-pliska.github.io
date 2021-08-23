// contact me modal

var letsconnectbtn = document.querySelector("#contact-me-btn");
var contactmodalbg = document.querySelector("#contact-me-bg-modal");
var contactmodal = document.querySelector("#contact-me-modal");

letsconnectbtn.addEventListener("click", function () {
    contactmodalbg.classList.remove("is-hidden");
    contactmodal.classList.remove("is-hidden");
});

//if user clicks where event target has class modal-bg then hide modals and bg
contactmodalbg.addEventListener("click", function(e) {
    if ( $(e.target).hasClass('modal-container')) {
        contactmodalbg.classList.add("is-hidden");
        
    }
});