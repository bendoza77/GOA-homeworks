import  {randomSuperhero} from "superheroes"
import { useState } from "react";

const App = () => {

    const [count, setCount] = useState([]);

    // Task 1

    // Code splitting is a way for us to optimize our site. It helps us avoid loading unnecessary modules
    //  on our site and splits our files and folders, which ensures that the site loads faster.

    // The import function helps us to import modules and is used to prevent the accidental inclusion of 
    // modules on our site and to load a certain module after certain actions. The difference compared to
    // a regular module is that a regular import is top level code, 
    // it cannot be used in a function or at the end of the code, while with code splitting import we can

    
    // Task 2

    const handleSuper = () => {
        const {randomSuperhero} = import("superheroes");

        setCount(prev => {
            return [...prev, randomSuperhero()];
        })

    }

    
    return (
        <>
            <p>{count}</p>
            <button onClick={handleSuper}>Plus 1</button>
        </>
    );



}

export default App
