const email = document.getElementById("email");
const password = document.getElementById("password");
const myForm = document.getElementById("myForm");
const button = document.getElementById("button");

const arr = JSON.parse(localStorage.getItem("user"));
let newArr = [];

for (const i of arr){
    for (const j of i){
        newArr.push(j);
    }
}

myForm.addEventListener("submit", function(e){
    e.preventDefault();

    if(email.value.trim() === "" || !newArr.includes(email.value)){
        email.style.border = "1px solid red";
    } else{
        email.style.border = "1px solid  hsl(0, 0%, 41%)";
    }

    if(password.value.trim() === "" || !newArr.includes(password.value)){
        password.style.border = "1px solid red";
    } else{
        password.style.border = "1px solid  hsl(0, 0%, 41%)";
    }

    if(email.value.trim() !== "" && newArr.includes(email.value) && password.value.trim() !=="" && newArr.includes(password.value)) {
        window.location.href = "main.html";
    }
})


