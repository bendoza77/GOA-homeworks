import { useEffect, useState } from "react";


const QuoteBox = () => {

    const [quote, setQuote] = useState("");



    useEffect(() => {

        const fetchApi = async () => {

            try {
                const api = await fetch("https://api.adviceslip.com/advice");
                const apiJson = await api.json();
                setQuote(apiJson.slip.advice);
                
            } catch(error) {
                console.log(error);
            }

        }
        fetchApi();

    }, [quote])

    return (
        <>
            <h1>The random quote</h1>
            <p>{quote}</p>
            <br />

            <button onClick={() => setQuote("")}>Click fr random quote</button>
        </>
    );

}

export default QuoteBox;