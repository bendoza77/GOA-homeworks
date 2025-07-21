import { useEffect, useState } from "react"

const App = () => {

    // When I visited the site many times, the count state was added to a number that doubled and grew after each click. 
    // This was also because the cleanup function was not added and a new event listener was added every time a click was made, 
    // which is why the number added to the count state doubled with each click. Therefore, after adding the cleanup function, 
    // this problem was no longer there because the cleanup 
    // function cleaned the callstack and deleted the event listeners.

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.addEventListener("click", handleCount)

        return () => {
            document.removeEventListener("click", handleCount);
        }

    })

    const handleCount = () => {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <p>Count: {count}</p>
        </>
    );

  

}


export default App
