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


const Prime = () => {
    const [number, setNumber] = useState("");
    const [click, setClick] = useState(false);
    const result = useMemo(() => isPrimeExpensive(number), [number]);

    return (
        <>
            <form>
                <input onChange={(e) => setNumber(parseInt(e.target.value))} type="number" name="number" placeholder="Enter number" />
            </form>

        <p>{result ? "number is prime" : "number is not prime"}</p>
        <p style={{display: click ? "flex" : "none"}}>number is prime when he has only 2 divisor 1 and self</p>
        <button onClick={() => setClick(!click)}>when is number prime?</button>
        </>
    );

}

export default Prime