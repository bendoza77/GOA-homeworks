const nameError = document.getElementById("nameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const chekeError = document.getElementById("chekeError");
const radioError = document.getElementById("radioError");
const myForm = document.getElementById("myForm");
const userName = document.getElementById("userName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const general = document.getElementById("general");
const support = document.getElementById("support");
const checkbox = document.getElementById("checkbox");
const main  = document.getElementById("main");
const generalInput = document.getElementById("generalInput");
const supportInput = document.getElementById("supportInput");
const alert = document.getElementById("alert");
const radio2 = document.getElementById("radio2");
const radio1 = document.getElementById("radio1");
const img = document.getElementById("img");

alert.style.display = "none";
radio2.style.display = "none";
radio1.style.display = "none";
img.style.display = "none";

let change = true;

myForm.addEventListener("submit", function(e){
    e.preventDefault();

    if(userName.value.trim() === ""){
        nameError.textContent =  "This field is required";
        nameError.style.color = "hsl(0, 66%, 54%)";
        nameError.style.fontSize = "14px";
        userName.style.border = " 1px solid hsl(0, 66%, 54%)";
        
    } else {
        nameError.textContent =  "";
        userName.style.borderColor = "hsl(187, 24%, 22%)";
    }
    
    if(lastName.value.trim() === ""){
        lastNameError.textContent =  "This field is required";
        lastNameError.style.color = "hsl(0, 66%, 54%)";
        lastNameError.style.fontSize = "14px";
        lastName.style.border = "1px solid hsl(0, 66%, 54%)";
    } else{
        lastNameError.textContent =  "";
        lastName.style.borderColor = "hsl(187, 24%, 22%)";

    }

    if(email.value.trim() === ""){
        emailError.textContent =  "This field is required";
        emailError.style.color = "hsl(0, 66%, 54%)";
        emailError.style.fontSize = "14px";
        email.style.border = "1px solid hsl(0, 66%, 54%)";
        main.style.height = "102%";
    } else{
        emailError.textContent =  "";
        email.style.border = "1px solid hsl(187, 24%, 22%)";
        main.style.height = "99%";
    }

    if(!(general.checked) && !(support.checked)){
        radioError.textContent = "This field is required";
        radioError.style.color = "hsl(0, 66%, 54%)";
        radioError.style.fontSize = "14px";
    } else{
        radioError.textContent = "";
    }

    if(!(checkbox.checked)){
        chekeError.textContent =  "This field is required";
        chekeError.style.color = "hsl(0, 66%, 54%)";
        chekeError.style.fontSize = "14px";
        checkbox.style.border = "1px solid hsl(0, 66%, 54%)";
    } else{
        chekeError.textContent =  "";
        checkbox.style.border = "1px solid hsl(187, 24%, 22%)";
    }


    if(userName.value.trim() !== "" && lastName.value.trim() !== "" && email.value.trim() !== "" && (general.checked || support.checked) && checkbox.checked){
        main.style.height = "95%";
        window.document.getElementById("myForm").reset();
        generalInput.style.backgroundColor = "white"
        generalInput.style.border = "1px solid hsl(187, 24%, 22%)";
        supportInput.style.backgroundColor = "white"
        supportInput.style.border = "1px solid hsl(187, 24%, 22%)";
        alert.style.display = "block";
    }

})


function changeGeneral(){
    generalInput.style.border = "1px solid hsl(169, 82%, 27%)";
    generalInput.style.backgroundColor = " hsl(148, 38%, 91%)";
    supportInput.style.border = "1px solid hsl(187, 24%, 22%)";
    supportInput.style.backgroundColor = "white";
    radio1.style.display = "block";
    general.style.display = "none";
    radio2.style.display = "none";
    support.style.display = "block";
}

function changeSupport(){
    supportInput.style.border = "1px solid hsl(169, 82%, 27%)";
    supportInput.style.backgroundColor = " hsl(148, 38%, 91%)";
    generalInput.style.border = "1px solid hsl(187, 24%, 22%)";
    generalInput.style.backgroundColor = "white";
    radio2.style.display = "block"
    support.style.display = "none";
    radio1.style.display = "none";
    general.style.display = "block";
}

function changeName(){
    userName.style.border = "1px solid hsl(169, 82%, 27%)";
    lastName.style.border = "1px solid hsl(187, 24%, 22%)"
    email.style.border = "1px solid hsl(187, 24%, 22%)";
}   

function changeLastName(){
    userName.style.border = "1px solid hsl(187, 24%, 22%)";
    lastName.style.border = "1px solid hsl(169, 82%, 27%)"
    email.style.border = "1px solid hsl(187, 24%, 22%)";
}

function changeEmail(){
    userName.style.border = "1px solid hsl(187, 24%, 22%)";
    lastName.style.border = "1px solid hsl(187, 24%, 22%)"
    email.style.border = "1px solid hsl(169, 82%, 27%)";
}

function alertNone(){
    alert.style.display = "none";
}


function changeCheckeBox(){
    if(checkbox.checked){
        checkbox.style.display = "none";
        img.style.display = "block";
        change = false
    } else{
        checkbox.style.display = "block";
        img.style.display = "none";
    }
}