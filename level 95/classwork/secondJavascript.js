const myForm = document.getElementById("myForm");
let res = [];


myForm.addEventListener("submit", function(e){
    e.preventDefault();

    const userName = myForm.userName.value;
    const email = myForm.email.value;
    const age = myForm.age.value;

    if(res.length === 0){
        localStorage.setItem("user", JSON.stringify([]));
        res.push([userName, email, age]);

    } else{
        let newArr = JSON.parse(localStorage.getItem("user"));
        newArr.push([userName, email, age]);
        localStorage.setItem("user", JSON.stringify(newArr));

    }
})