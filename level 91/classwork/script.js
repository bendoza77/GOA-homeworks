const myForm = document.getElementById("myForm");
const result = document.getElementById("result");
const myBtn = document.getElementById("myBtn")

myBtn.addEventListener("click", function(e){
    e.preventDefault();
    result.innerHTML = "";

    fetch("https://www.googleapis.com/books/v1/volumes?q={searchTerm}").then((response) => {
        return response.json();
    }).then((bookName) => {
        return bookName["items"];
    }).then((res) => {
        for(const i of res){
            console.log(i.volumeInfo)
            if(i.volumeInfo.title === myForm.bookName1.value){
                result.innerHTML += [
                    `<h1>Title: ${i.volumeInfo.title}</h1>`,
                    `<p>Time: ${i.volumeInfo.publishedDate}</p>`,
                    `<p>Description:  ${i.volumeInfo.description}</p>`,
                    `<p>Authors: ${i.volumeInfo.authors[0]}</p>`,
                    `<p>Page Count: ${i.volumeInfo.pageCount}</p>`,
                    `<img src="${i.volumeInfo.imageLinks.thumbnail}" width="200px">`

                ]
            }
        }

    }).catch((err) => {
        console.log(err);
    })
})