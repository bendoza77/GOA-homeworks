import { animals } from "./animal.jsx";

function displayFact(e){

    let randomIndex = Math.floor(Math.random() * e.length);
    const text = document.getElementById("fact");

    text.textContent = e[randomIndex];

}

function App() {

    let image = [];

    for(const i in animals){
        image.push(<div key={i} onClick={() => displayFact(animals[i].facts)}><img role="button" aria-label={i} className="animal" src={animals[i].image} alt={i} /></div>)
    }


    const title = "";
    const background = <div className="animals">{image}</div>;
    const showBackground = true;
    const aniamlFacts = <div>
        <h1>{title === "" ? "Click an aniaml for a fun fact!" : title}</h1>;
        <p id="fact"></p>;
        {showBackground && <img src="https://wallpapershome.com/images/pages/ico_h/386.jpg" />}
    </div>;


    return (
        <div>
            <div>
                {aniamlFacts}
                {background}
                
            </div>
        </div>
    );

}


export default App
