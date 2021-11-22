

/*
when users type in a color, it finds the color data in data/color.json and changes the color of the below div based on the color data.  The users submitted data is also posted to google Firestore, read back to the application and also posted on the below div.
*/

// get from submit id.  Note: I attached id from the button but you can also attach it to the form.
var submitColorBtn = document.querySelector("#submit-color");

submitColorBtn.addEventListener("click", function (e) {
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
            <p>the data pulled from the db is ${doc.data()["Color Name"]}.</p>
            
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

/*
Add login and sign up that authenticates users and displays content only to authenticated users.
*/

// login
var loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let email = document.querySelector("#login-email").value;
    let password = document.querySelector("#login-password").value;

    console.log(email, password);

    // pass username and password to firebase
    // auth.signInWithEmailAndPassword(email, password)

});

// sign in
var signInBtn = document.querySelector("#sign-up-btn");

signInBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let email = document.querySelector("#login-email").value;
    let password = document.querySelector("#login-password").value;
    
});