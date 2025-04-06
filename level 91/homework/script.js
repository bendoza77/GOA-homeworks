// Task 1

// async is a keyword for creating a function that returns a Promise, while the await keyword, 
// which only works with the async keyword, is a keyword used to pause a function until 
// the Promise is terminated, i.e., until the Promise is resolved or rejected.

// Task 2

const myForm = document.getElementById("myForm");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

btn.addEventListener("click", async function(e){
    try{
        e.preventDefault();
        result.innerHTML = "";

        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q={searchTerm}");
        const bookName = await response.json();
        const item = bookName.items;

        for(const i of item){
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
    } catch (err){
        console.log(err);
    }
})