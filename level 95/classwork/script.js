const myForm = document.getElementById("myForm");

let person = 1;

myForm.addEventListener("submit", function(e){
    e.preventDefault();

    const userName = myForm.userName.value;
    const email = myForm.email.value;
    const age = myForm.age.value

    localStorage.setItem(`Person${person}`, JSON.stringify([userName,email,age]));
    person += 1

})