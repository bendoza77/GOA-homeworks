import React, { useState } from 'react'


// Here I created a function called Contact which is a wrapper function and does 
// everything and which outputs the result in the browser.
function Contact() {

  // Here I created another function in the Contact function called handleSubmit which 
  // checks if the user entered the correct password or not.
  function handleSubmit(e){
    // Then I passed this function a parameter e, which denotes an event, and this parameter 
    // ensures that after entering the password, the site 
    // is not reset and the entered password is not deleted.
    e.preventDefault()
    
    // Here I retrieved two elements via document.getElementById, one is the entire form and the other is a 
    // paragraph that already contains a 
    // message indicating whether the user entered the correct password or not.
    const result = document.getElementById("result");
    const myForm = document.getElementById("myForm");
    // This is a valid non-Vlad comparison true boolean is a type that determines whether the user entered the correct password.
    let valid = true

    // Here I have already written an if else condition that states that if the password entered by the user 
    // (here I am using a form element with the name value and removing the value with the value, and the trim() 
    // function removes this value without white spaces) was not correct, then the valid variable should be equal to false, 
    // which means that the user entered an incorrect password.
    if (myForm.password.value.trim() !== "swordFish"){
      valid = false;
    }

  
    // Here I'm using the ernary operator, which does the following: If valid is true, my number and email are added as text 
    // to the paragraph I created, and if valid is false, 
    // it is added to the paragraph to enter the password
    valid ? result.textContent = "Phone number: 592076515, Email: gabrieljobava123@gmail.com" : result.textContent = "Enter the password";

  }


  // Here I have already created a variable login where the form tag is stored where I am already creating an 
  // input where the user enters a password, so I wrote password as the type and password as the name because I wanted 
  // to take it through the name into the handleSubmit function, and I wrote the form id myForm because I wanted to take 
  // it into the handleSubmit function as well so 
  // that I could then perform certain actions on them.
  let login = (<form id='myForm' action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder='Password' name='password'/>
      <input  type="submit" />
      <p id="result"></p>
    </form>);


    // Then I manually return the final result so that it all displays in the browser and add Contact as the title using the h1 tag.
    return (
      <div>
        <h1>Contact</h1>
        {login}
      </div>
    );

}

// Here I'm already exporting my Contact function to use in my main.jsx file.
export default Contact
