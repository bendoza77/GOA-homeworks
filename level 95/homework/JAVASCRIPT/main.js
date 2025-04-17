const topBook = document.getElementById("topBook");
const sadBook = document.getElementById("sadBook");
const comedyBook = document.getElementById("comedyBook");
const world = document.getElementById("world");

// The input forms

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const myForm = document.getElementById("myForm");

class Book{
    constructor(title, author, image){
        this.title = title
        this.author = author
        this.image = image;
    }

    getInfo(){
        return `<div class="book-div" style="cursor:pointer;" onclick='handleClick("${this.title}", "${this.author}", "${this.image}")'>
            <a href="./add.html"><img src="${this.image}" /></a>
            <p>The title: ${this.title}</p>
            <p>The author: ${this.author}</p>
        </div>`;
    }


    
}

const topSellBooks = [
    new Book("Don Quixote", "Miguel de Cervantes", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694837711i/198878500.jpg"),
    new Book("A Tale of Two Cities", "Charles Dickens", "https://sterling-us.imgix.net/covers/9781435171480.jpg?auto=format&h=648"),
    new Book("The Lord of the Rings ", "J.R.R. Tolkien", "https://musicart.xboxlive.com/7/8a8d5100-0000-0000-0000-000000000002/504/image.jpg"),
    new Book("The Little Prince", "Antoine de Saint-Exupéry", "https://m.media-amazon.com/images/I/71OZY035QKL.jpg"),
    new Book("Harry Potter and the Philosopher’s Stone", "J.K. Rowling", "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781408855652.jpg")
]

const topSadBooks = [
    new Book("A Little Life", " Hanya Yanagihara", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446469353i/22822858.jpg"),
    new Book("The Fault in Our Stars", " John Green", "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png/250px-The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png"),
    new Book("Of Mice and Men", " John Steinbeck", "https://upload.wikimedia.org/wikipedia/commons/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg"),
    new Book("Me Before You", "Jojo Moyes", "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_FMjpg_UX1000_.jpg"),
    new Book("The Book Thief ", "Markus Zusak", "https://m.media-amazon.com/images/I/914cHl9v7oL.jpg")
]

const topComedyBooks = [
    new Book("Good Omens", " Neil Gaiman & Terry Pratchett", "https://m.media-amazon.com/images/M/MV5BZDRmNGY5MTUtNDQxMC00MjMyLWIzODQtNzU2ZTdhMjJhOTA5XkEyXkFqcGc@._V1_.jpg"),
    new Book("The Hitchhiker’s Guide to the Galaxy", "Douglas Adams", "https://m.media-amazon.com/images/M/MV5BMTg4OWYwZjgtZDU0ZS00NjU4LTkxNjItYmYyYmUwNDU5YmM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"),
    new Book("Bossypants", "Tina Fey", "https://upload.wikimedia.org/wikipedia/en/7/7c/Bossypants_Cover_%28Tina_Fey%29_-_200px.jpeg"),
    new Book("Hyperbole and a Half", "Allie Brosh", "https://m.media-amazon.com/images/I/71DsHN46D6L.jpg"),
    new Book("Catch-22", "Joseph Heller", "https://upload.wikimedia.org/wikipedia/commons/8/80/Catch-22_%281961%29_front_cover%2C_first_edition.jpg")
]

const topWorldBooks = [
    new Book("Treasure Island", "Robert Louis Stevenson", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVAJIs8-BNKzcZbbIWDAETO07u0oLdDid1w&s"),
    new Book("The Hobbit", "J.R.R. Tolkien", "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg"),
    new Book("The Count of Monte Cristo", " Alexandre Dumas", "https://m.media-amazon.com/images/M/MV5BMTY4NTA3ZDYtMWVkYy00MGNkLTlmYzUtODQ5YjZlZTA3YjA5XkEyXkFqcGc@._V1_.jpg"),
    new Book("Around the World in 80 Days", "Jules Verne", "https://m.media-amazon.com/images/M/MV5BYTNmOTdlYzUtMGEyOC00YzBmLWFmYzAtMTBiM2UwOWQwZGJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"),
    new Book("Life of Pi", "Yann Martel", "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg")
]

topSellBooks.forEach(element => {
    topBook.innerHTML += element.getInfo();
});


topSadBooks.forEach(element => {
    sadBook.innerHTML += element.getInfo();
})

topComedyBooks.forEach(element => {
    comedyBook.innerHTML += element.getInfo();
})

topWorldBooks.forEach(element => {
    world.innerHTML += element.getInfo();
})

myForm.addEventListener("submit", function(e){
    e.preventDefault();

    if(userName.value.trim() === ""){
        userName.style.border = "1px solid red";
    } else{
        userName.style.border = "none";
    }

    if(email.value.trim() === ""){
        email.style.border = "1px solid red";
    } else{
        email.style.border = "none";
    }

    if(userName.value.trim() !== "" && email.value.trim() !== ""){
        myForm.reset();
    }
})

let res = [];

function handleClick(title, author, image) {

    localStorage.setItem("add", JSON.stringify([title, author, image]));

    let readBooks = JSON.parse(localStorage.getItem("read")) || [];

    if([title, author, image] in readBooks){
        readBooks.pop();
        localStorage.setItem("read", JSON.stringify(readBooks));
    } else{
        readBooks.push([title, author, image]);
        localStorage.setItem("read", JSON.stringify(readBooks));
    }

    let book = JSON.parse(localStorage.getItem("books")) || [];
    book.push([title, author, image]);

    localStorage.setItem("books", JSON.stringify(book));
}

function addBook(){
    window.location.href = "main.html";
}

function cancel(){
    const arr = JSON.parse(localStorage.getItem("books"));
    arr.pop();
    localStorage.setItem("books", JSON.stringify(arr));

    const secondArr = JSON.parse(localStorage.getItem("read"));
    secondArr.pop();
    localStorage.setItem("read", JSON.stringify(secondArr));
    window.location.href = "main.html";
}

