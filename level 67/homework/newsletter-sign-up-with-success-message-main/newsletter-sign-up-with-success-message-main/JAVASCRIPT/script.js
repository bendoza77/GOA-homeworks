const email = document.getElementById("email");
const myForm = document.getElementById("myForm");
const valid = document.getElementById("valid");
const main = document.getElementById("main");
const secondInfo = document.getElementById("secondInfo");
const secondMain = document.getElementById("secondMain");

valid.style.display = "none";
secondMain.style.display = "none";


myForm.addEventListener("submit", function(e){
    e.preventDefault();

    if(email.value.trim() === ""){
        email.style.borderColor = "hsl(4, 100%, 67%)";
        email.style.background = "hsl(5, 100.00%, 89.80%)"
        valid.style.display = "block";
    } else{
        valid.style.display = "none";
        email.style.borderColor = " hsl(231, 7%, 60%)";
        email.style.background = "transparent"
        main.style.display = "none";
        secondMain.style.display = "block";
        secondInfo.textContent = email.value;
        secondInfo.style.fontWeight = "700";
    }
})


function changeEmail(){
    email.style.border = "1px solid hsl(234, 29%, 20%)";
}


function button(){
    secondMain.style.display = "none";
    main.style.display = "block";
    main.style.display = "flex";
    main.style.flexDirection = "row";

}