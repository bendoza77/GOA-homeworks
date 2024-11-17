const p1 = document.getElementById("p1");
const changeColor = document.getElementById("changeColor");

function change(){
    p1.style.color = "red";
}

changeColor.onclick = change;