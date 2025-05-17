import React, { useState } from 'react'

function Contact() {
  function handleSubmit(e){
    e.preventDefault()
    const result = document.getElementById("result");
    const myForm = document.getElementById("myForm");
    let valid = true

    if (myForm.password.value.trim() !== "swordFish"){
      valid = false;
    }

  

    valid ? result.textContent = "Phone number: 592076515, Email: gabrieljobava123@gmail.com" : result.textContent = "Enter the password";

  }

  let login = (<form id='myForm' action="#" onSubmit={handleSubmit}>
      <input type="password" placeholder='Password' name='password'/>
      <input  type="submit" />
      <p id="result"></p>
    </form>);


    return (
      <div>
        <h1>Contact</h1>
        {login}
      </div>
    );

}

export default Contact
