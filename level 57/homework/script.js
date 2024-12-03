// Task 1

const myForm = document.getElementById("myForm");
const myBtn = document.getElementById('myBtn');
const userName = document.getElementById("userName");
const myDiv = document.getElementById("myDiv");
const myEmail = document.getElementById("myEmail");
const myPassword = document.getElementById("myPassword");
const myGender = document.getElementById("myGender");

myForm.addEventListener('submit', function(e){
    e.preventDefault()
    const text = confirm("do you accept website rules?");

    if (text === true){
        alert("you register sacsefuly");
        console.log(myForm.userName.value);
        console.log(myForm.email.value);
        console.log(myForm.password.value);
        console.log(myForm.gender.value);
        myDiv.textContent = myForm.userName.value;
        myEmail.textContent = myForm.email.value;
        myPassword.textContent = myForm.password.value;
        myGender.textContent = myForm.gender.value;
        
    } else{
        alert("please accept website rules");
    }
})