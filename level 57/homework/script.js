// Task 2

    // Task 1

// In these lines of code, I linked the html elements and in the javascript file, 
// to perform certain actions on them, 
// I linked them using getElementId.
const myForm = document.getElementById("myForm");
const myBtn = document.getElementById('myBtn');
const userName = document.getElementById("userName");
const myDiv = document.getElementById("myDiv");
const myEmail = document.getElementById("myEmail");
const myPassword = document.getElementById("myPassword");
const myGender = document.getElementById("myGender");
const genderMale = document.getElementById("genderMale");
const genderFemale = document.getElementById("genderMale");


// In this line of code, I have included an action listener addEventListener which receives 
// a certain action and listens for it, in this case the submit action.
myForm.addEventListener('submit', function(e){
    e.preventDefault()
    // I wrote a const text variable here because I wanted this variable to be immutable, 
    // and I wrote the confrim() function as the value of this variable so that after filling 
    // out the registration form, it would display 
    // a question on the screen asking whether the creator accepted the site's rules or not.
    const text = confirm("do you accept website rules?");

    // Here I wrote an if else condition that if the confrim() function evaluates to true and the gender is checked, 
    // it will print all the registration form information both in the console and on the screen.
    if (text === true && genderFemale.checked || genderMale.checked){
        alert("you register sacsefuly");
        console.log(myForm.userName.value);
        console.log(myForm.email.value);
        console.log(myForm.password.value);
        console.log(myForm.gender.value);
        myDiv.textContent = myForm.userName.value;
        myEmail.textContent = myForm.email.value;
        myPassword.textContent = myForm.password.value;
        myGender.textContent = myForm.gender.value;
        myForm.reset()
        
        // Here I wrote else if if gender is not checked, it will display a warning on the screen that gender must be checked.
    }else if(!(genderFemale.checked || genderMale.checked)){
        alert("Please choose your gender.");
        // Otherwise, it will issue a warning to agree to the site's rules.
    } else{
        alert("please accept website rules");
    }
})

    // Task 2

// The checked() method in javascript is for cheked the checkbox if checkbox 
// marked or not. if marked in console checked() method will return boolean - true
// if not checked() will return false in console.


// Task 3


    // Task 1

// In these lines of code, I linked the html elements and in the javascript file, 
// to perform certain actions on them, 
// I linked them using getElementId.
const adult = document.getElementById("adult");
const userEmail = document.getElementById("userEmail");
const user = document.getElementById("user");
const userPassword = document.getElementById("userPassword");


// Here I wrote an if else condition that if the confrim() function evaluates to true and the gender is checked, 
// it will print all the registration form information both in the console and on the screen.
adult.addEventListener("submit", function(e){
    e.preventDefault();
    // I wrote a const text variable here because I wanted this variable to be immutable, 
    // and I wrote the confrim() function as the value of this variable so that after filling 
    // out the registration form, it would display 
    // a question on the screen asking whether the creator id adult or not.
    const question = confirm("Are you adult");

    // Here I wrote an if else condition that if the confrim() function evaluates to true and the gender is checked, 
    // it will print all the registration form information in the console.
    if (question === true){
        alert("You are Adult");
        console.log(adult.user.value);
        console.log(adult.userEmail.value);
        console.log(adult.userPassword.value);
        adult.reset()
        // Otherwise, it will issue a warning creator must be adult.
    } else{
        alert("You are kid");
    }
})


    // Task 2

//  We use the confirm method to ask the user at a specific moment whether they want to take a specific action, ~
// such as exiting the site, staying there, or reloading, 
// as well as to ask whether they agree to the site's rules or want to perform another specific action.