// contact me modal
var letsConnectBtn = document.querySelector("#contact-me-btn");
var contactModalBg = document.querySelector("#contact-me-bg-modal");
var contactModal = document.querySelector("#contact-me-modal");

// when user clicks letsConnectBtn unhide modal and modal background
letsConnectBtn.addEventListener("click", function () {
    contactModalBg.classList.remove("is-hidden");
    contactModal.classList.remove("is-hidden");
});

//if user clicks where event target has class modal-bg then hide modals and bg
contactModalBg.addEventListener("click", function(e) {
    if ( $(e.target).hasClass('modal-container')) {
        contactModalBg.classList.add("is-hidden");
        contactModal.classList.remove("is-hidden");        
    }
});