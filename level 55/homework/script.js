// Task 2


const myDiv = document.getElementById("myDiv");
let firstNumber = Number(prompt("Enter the firt number for sum"));
let secondNumber = Number(prompt("Enter the second number for sum"));

let result = firstNumber + secondNumber;

myDiv.textContent = result;

// Task 4

const myForm = document.getElementById("myForm");

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(myForm.text.value);
    console.log(myForm.email.value);
    console.log(myForm.password.value);

})

// Task 5

// all best practise: 
// 1) comment
// 2) indentation


// Task 6


// The name attribute is used not only to make the id easier to access, but also works more globally and 
// efficiently in terms of JavaScript, 
// server-side data transfer, and form structures.