// Here I imported the variable animal from the file that stores the object
import { animals } from "./animal.jsx";

// Here I created a function that returns interesting animal facts using a random index.
function displayFact(e){

    // Here I have created a variable called randomIndex which stores an interesting fact. The facts of 
    // each object are given as a list and here I store a random index 
    // according to the length of this list so that the index does not exceed the length of the list.
    let randomIndex = Math.floor(Math.random() * e.length);

    // Here I have even downloaded a paragraph whose meaning is an interesting fact chosen at random 
    // and I am equating this fact to this paragraph using textContent.
    const text = document.getElementById("fact");
    text.textContent = e[randomIndex];

}

// This is already the main function in which everything happens and all information is displayed in the browser.
function App() {

    // Here I created a variable image in which I store img tags whose links are taken from the object.
    let image = [];

    // In order to put all the links in the img tag and create a new img tag on every iteration, I used a for loop. 
    // Using the index and image key, I took the image link from the object and on each iteration, I created a new image 
    // which was stored in the image variable. I also used the key keyword so that all the images that were created were not
    //  perceived as one whole, but I wrote different key values ​​to each img tag so that each img tag was perceived differently.
    for(const i in animals){
        image.push(<div key={i} onClick={() => displayFact(animals[i].facts)}><img role="button" aria-label={i} className="animal" src={animals[i].image} alt={i} /></div>)
    }


    // Here I created a variable called title whose value is an empty string because if this string is 
    // empty then the site will have the default title and if not then it will have the title that is written in this string. 
    // For this, I created an h1 tag in the animalFacts variable and wrote a ternary operator inside it so that if the title is 
    // empty then the default title will be written in the h1 tag and if 
    // not then what is stored in the title variable will be written.
    const title = "";
    const background = <div className="animals">{image}</div>;
    // I also created a showBackground variable that stores the boolean value true, and in animalFacts I use the && 
    // operator so that if the showBackground variable contains true, then the image is displayed using the img tag, 
    // and if it contains false, nothing is displayed.
    const showBackground = true;
    const aniamlFacts = <div>
        <h1>{title === "" ? "Click an aniaml for a fun fact!" : title}</h1>;
        <p id="fact"></p>;
        {showBackground && <img src="https://wallpapershome.com/images/pages/ico_h/386.jpg" />}
    </div>;

    // Here I usually return the result where everything is written in brackets because if I want to write 
    // more than one line then I need to put all the results in brackets and at the same time in a div tag so 
    // that they are displayed in all browsers. And aniamlFacts, showBackground are inserted in the shape brackets so 
    // that they are perceived as variables and not as text.
    return (
        <div>
            <div>
                {aniamlFacts}
                {background}
            </div>
        </div>
    );

}


// Here I imported this main function into the main.jsx file so that the result returned by this function is displayed in the browser.
export default App
