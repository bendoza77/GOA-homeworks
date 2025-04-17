const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const secondForm = document.getElementById("secondForm");

let res = [];

secondForm.addEventListener("submit", function(e){
    e.preventDefault();

    if(userName.value.trim() === ""){
        userName.style.border = "1px solid red";
    } else{
        userName.style.border = "1px solid  hsl(0, 0%, 41%)";
    }

    if(userEmail.value.trim() === ""){
        userEmail.style.border = "1px solid red";
    } else{
        userEmail.style.border = "1px solid  hsl(0, 0%, 41%)";
    }

    if(userPassword.value.trim() === ""){
        userPassword.style.border = "1px solid red";
    } else{
        userPassword.style.border = "1px solid  hsl(0, 0%, 41%)";
    }

    if(res.length === 0){
        localStorage.setItem("user", JSON.stringify([]))
        res.push([userEmail.value, userName.value, userPassword.value]);
    }

    if (userName.value.trim() !== "" && userEmail.value.trim() !== "" && userPassword.value.trim() !== "" && res.length > 0){
        const info = JSON.parse(localStorage.getItem("user"))
        res.push([userName.value, userEmail.value, userPassword.value])
        info.push([userName.value, userEmail.value, userPassword.value]);
        localStorage.setItem("user", JSON.stringify(info));
        window.location.href = "main.html";
    }    
});