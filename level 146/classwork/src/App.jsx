import { useMemo, useState } from "react";

const isPrimeExpensive = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    
    let result = true;
    for (let i = 2; i < num; i++) {
        for (let j = 0; j < 10000; j++) {
            Math.sqrt(j);
        }

        if (num % i === 0) {
            result = false;
            break;
        }
    }
    return result;
}

const App = () => {

  // Task 1

    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    const result = useMemo(() => isPrimeExpensive(number), [number]);
  
    return (
      <>
        <form>
          <input onChange={(e) => setText(e.target.value)} type="text" name="text" placeholder="Enter text" /> <br />
          <input onChange={(e) => setNumber(parseInt(e.target.value))} type="number" name="number" placeholder="Enter number"/>
        </form>
  
        <p>{result ? "Number is prime": "Number is not prime"}</p>
        
      </>
    );

  // Task 2

    // useMemo is a hook that helps us optimize our site to make our site faster. 
    // useMemo caches the value so that the expensive function is not run on every change 
    // and expensive calculations are not made even on small changes and the function is run 
    // in the event that the state recorded in the dependency array changes, but if the array 
    // is empty then the expensive function is run only during the first rendering of the site 
    // and not more times. In short, the useMemo hook helps us optimize the site so that expensive functions are not 
    // run unnecessarily and do not take up unnecessary time and resources.


}

export default App
