//contact me modal

var contactmemodal = document.querySelector("#contact-me-modal");
var contactmemodalbg = document.querySelector("#contact-me-modal-bg");

//get html element of contact me button
var contactme = footer.querySelector("#contact-me");    
//Add a click event
contactme.addEventListener('click', function () {
    //grab the modal
    //show bg modal
    contactmemodalbg.classList.remove('is-hidden');
    //show modal
    contactmemodal.classList.remove('is-hidden');
});

//get modal
contactmemodalbg.addEventListener("click", function(event) {
      // If user clicks outside the modal window, then close modal
      if( $(event.target).hasClass('modal-container')) contactmemodalbg.classList.add('is-hidden');
    });