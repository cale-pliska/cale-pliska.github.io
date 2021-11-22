console.log(db);


// get from submit id
var submitBtn = document.querySelector("#fun-form-submit");

submitBtn.addEventListener("click", function (e) {
    //don't reload page after hitting submit btn
    e.preventDefault();

    // get user favorite color input and make it lowercase
    var favoriteColor = document.getElementById("favorite-color-response").value.toLowerCase();

    //add value to firebase database, read data from firebase and display it on the page.
    db.collection('Colors').doc(favoriteColor).set({
        "Color Name": favoriteColor
    })
    .then((data) => {
        console.log("FEEDBACK COLLECTED!");

        //read data from firebase
        docRef = db.collection('Colors').doc(favoriteColor);

        docRef.get().then((doc) => {


            HTML = `
            <p>You have changed the color to ${favoriteColor}!</p>
            <p>the other data is ${doc.data()["Color Name"]}.</p>
            
            `;
            
            outputBlock = document.querySelector("#color-output");
            outputBlock.innerHTML = HTML;
        })
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });

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
                    elements[i].style.backgroundColor = colorRGB; //change bg color for all html elements matching 'color-output' class in the 'fun-container' class
                }
            }
        }
    });
});