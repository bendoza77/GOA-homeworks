// Task 1

const myForm = document.getElementById("myForm");
const no = document.getElementById("no");
const yes = document.getElementById("yes");
const myBtn = document.getElementById('myBtn');

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    const text = confirm("do you accept website rules?");

    if (text === true){
        alert("you register sacsefuly");
        console.log(myForm.userName.value);
        console.log(myForm.email.value);
        console.log(myForm.password.value);
        console.log(myForm.gender);
    } else{
        alert("please accept website rules");
    }
})