import { useState } from "react";

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

  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const result = isPrimeExpensive(number);

  return (
    <>
      <form>
        <input onChange={(e) => setText(e.target.value)} type="text" name="text" placeholder="Enter text" /> <br />
        <input onChange={(e) => setNumber(parseInt(e.target.value))} type="number" name="number" placeholder="Enter number"/>
      </form>

      <p>{result ? "Number is prime": "Number is not prime"}</p>
      
    </>
  );

  // My site has a performance problem because when we change the text state, the number value is calculated no matter how
  // it is the same, which is pointless, because every time an expensive function is run for each text change, it
  // takes a lot of time and resources. No matter how much number is unchanged, if I change the text, the function will still be run, so it is a
  // performance problem, so we need a useMemo hook to cache the information and to call it every time the text state changes
  // so that the function does not run when the text has no connection to the function, and the function is called when
  // only the number state changes.


}

export default App
