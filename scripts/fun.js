// get from submit id
var submitBtn = document.querySelector("#fun-form-submit");

submitBtn.addEventListener("click", function (e) {
    //don't reload page after hitting submit btn
    e.preventDefault();

    // get user favorite color input
    var favoriteColor = document.getElementById("favorite-color-response").value;

    // todo clean user input

    //match input to colors data
    //color name to hex code data
    $.getJSON('data/colors.json', function(colorsObj) {

        console.log(colorsObj, colorsObj.red, favoriteColor);

        for (var color in colorsObj) {
            if (favoriteColor == color) {
                //crafting css accepted string value from object
                var colorRGB = `rgb(${colorsObj[color][0]}, ${colorsObj[color][1]}, ${colorsObj[color][2]})`;

                var elements = document.getElementsByClassName('color-output'); // get all elements - only one in our code
                for(var i = 0; i < elements.length; i++){
                    elements[i].style.backgroundColor = colorRGB; //change bg color for all html elements matching 'fun-container' class
                }
            }
        }
    });
});