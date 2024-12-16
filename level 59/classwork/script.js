// Task 1

const myForm = document.getElementById("myForm");
const gender= document.getElementById("gender");
const rules = document.getElementById("rules");
const user = document.getElementById("user");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userDiv = document.getElementById("userDiv");
const emailDiv = document.getElementById("emailDiv");
const passwordDiv = document.getElementById("passwordDiv");
const genderDiv = document.getElementById("genderDiv");
const country =document.getElementById("country");
const countryDiv = document.getElementById("countryDiv");


myForm.addEventListener("submit", function(e){
    e.preventDefault();

    if(user.value.trim() === ''){
        user.style.border = "2px solid red";
        alert("Enter the user name");
    } else if(userEmail.value.trim() === ''){
        userEmail.style.border = "2px solid red";
        alert("Enter Your Email");
    } else if(userPassword.value.trim() === ''){
        userPassword.style.border = "2px solid red";
        alert("Enter Your Password");
    } else if(user.value.trim() !== '' && userEmail.value.trim() !== '' && userPassword.value.trim() !== '' && rules.checked){
        console.log(myForm.userName.value);
        console.log(myForm.email.value);
        console.log(myForm.password.value);
        console.log(myForm.gender.value); 
        userDiv.textContent = myForm.userName.value;
        emailDiv.textContent = myForm.email.value;
        passwordDiv.textContent = myForm.password.value;
        genderDiv.textContent = myForm.gender.value;
        myForm.reset()
    } else{
        alert("Please Accpet the Website Rules");
    }
})