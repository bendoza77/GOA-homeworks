const title = document.getElementById("title");
const mainText = document.getElementById("mainText");
const secondImg = document.getElementById("secondImg")

fetch("https://api.adviceslip.com/advice").then((response) => {
    return response.json();
}).then((res) => {
    title.innerHTML = `<p>ADVICE #${res.slip.id}</p>`
    mainText.innerHTML = `<h1>"${res.slip.advice}"</h1>`
})


function restart(){
    location.reload();
    secondImg.style.boxShadow = "0 0 20px hsl(150, 100%, 66%)";
}
