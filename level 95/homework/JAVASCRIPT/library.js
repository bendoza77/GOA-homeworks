const read = document.getElementById("read");
const book = JSON.parse(localStorage.getItem("books"));
const readBook = JSON.parse(localStorage.getItem("read"));


for(const i of readBook){
    read.innerHTML += `
        <div class="re">
            <img src="${i[2]}">
        </div>
    `
}