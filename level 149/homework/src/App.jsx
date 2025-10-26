import { useCallback, useState } from "react";
import Greet from "./components/Greet";

const App = () => {

    // Here I created a count condition to make changes to the site, that is, to create a counter function.
    const [count, setCount] = useState(0);

    // Here I created an expesnive function to reuse and save time, I also used the useCallback hook 
    // to ensure that the function is only created once, so an empty dependency array is passed.
    const handleName = useCallback(() => {
        for (let i = 0; i < 1000000; i++) {
            console.log("hello my name is gabriel jobava");
        }
    }, []);

    // Here I will create a function on the button that if I press it, the count state will be added by one, and 
    // I will render the Greet component to which the handleName function will be passed.
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
            <Greet handleName={handleName} />
        </>
    );

    // The useCallback hook helps us avoid creating an expensive calculator every time we need to make a small change, 
    // which requires a lot of time and resources. 
    // The useCallback hook helps us avoid unnecessarily calling a function we don't want every time.



}

export default App
