import { useEffect, useState } from "react";
import Presentation from "./Presentation";

const Container = () => {

    const [check, setCheck] = useState(false);
    const [character, setCharacter] = useState(0)
    const [text, setText] = useState({});
    const [word, setWord] = useState(0);
    const [sentence, setSentence] = useState(0);
    const [chek1, setChek1] = useState(false);
    const [mode, setMode] = useState(false);
    const [result, setResult] = useState([]);
    const seeMore = document.getElementById("seeMore");
    const seeLess = document.getElementById("seeLess");

    useEffect(() => {
        document.title = "Character Counter"
    }, [])

    const handleChange = ({target}) => {
        const { name, value } = target

        setText(prev => {
        return {...prev, [name]: value}
        })
    }

    document.body.style.backgroundImage = mode ? "url(./src/images/bg-light-theme.png)" : "url(./src/images/bg-dark-theme.png)"

    useEffect(() => {

        const handleCountCharacter = () => {
            const userText = document.getElementById("userText");
            const limit = document.getElementById("limit").value;
            const err = document.getElementById("err");
            if (check === true && chek1 === true) {
                if (userText.value.length <= Number(limit)) {
                userText.style.border = "1px solid black";
                userText.style.boxShadow = "none";
                err.style.display = "none";
                if (chek1 === false) {
                    setCharacter(prev => prev = userText.value.trim().length);
                } else if (chek1 === true) {
                    setCharacter(prev => prev = userText.value.length);
                }

                const userTextSplit = document.getElementById("userText").value.split(" ");
                if (userTextSplit.length !== 1){
                    setWord(prev => prev = userTextSplit.length - 1);
                } else {
                    setWord(prev => prev = "0");
                }

                const userTextSplit1 = document.getElementById("userText").value.split(".");
                if (userTextSplit1.length !== 1) {
                    setSentence(prev => prev = userTextSplit1.length - 1);
                } else {
                    setSentence(prev => prev = "0");
                    }
                } else {
                    userText.style.border = "1px solid #FE8159";
                    userText.style.boxShadow = "0 0 10px #FE8159"
                    err.style.display = "flex";
                    return ;
                }

                setCharacter(prev => prev = userText.value.length);

                const userTextSplit = document.getElementById("userText").value.split(" ");
                const allEmpty = (value) => value === "";

                if (userTextSplit.every(allEmpty)) {
                    setWord(prev => prev = 0);
                } else {
                    setWord(prev => prev = userTextSplit.length - 1);
                }


                const userTextSplit1 = document.getElementById("userText").value.split(".");
                const allDot = (value) => value === "";

                if (userTextSplit1.every(allDot)) {
                    setSentence(prev => prev = 0);
                } else {
                    setSentence(prev => prev = userTextSplit1.length - 1);
                }



            } else if (check === false) {
                if (chek1 === false) {
                    setCharacter(prev => prev = userText.value.trim().length);
                } else if (chek1 === true) {
                    setCharacter(prev => prev = userText.value.length);
                }

                const userTextSplit = document.getElementById("userText").value.split(" ");
                const allEmpty = (value) => value === "";

                if (userTextSplit.every(allEmpty)) {
                    setWord(prev => prev = 0);
                } else {
                    setWord(prev => prev = userTextSplit.length - 1);
                }


                const userTextSplit1 = document.getElementById("userText").value.split(".");
                const allDot = (value) => value === "";

                if (userTextSplit1.every(allDot)) {
                    setSentence(prev => prev = 0);
                } else {
                    setSentence(prev => prev = userTextSplit1.length - 1);
                }
                
            } else if (check === true) {
                if (userText.value.length <= Number(limit)) {
                userText.style.border = "1px solid black";
                userText.style.boxShadow = "none";
                err.style.display = "none";
                if (chek1 === false) {
                    setCharacter(prev => prev = userText.value.trim().length);
                } else if (chek1 === true) {
                    setCharacter(prev => prev = userText.value.length);
                }

                const userTextSplit = document.getElementById("userText").value.split(" ");
                if (userTextSplit.length !== 1){
                    setWord(prev => prev = userTextSplit.length - 1);
                } else {
                    setWord(prev => prev = "0");
                }

                const userTextSplit1 = document.getElementById("userText").value.split(".");
                if (userTextSplit1.length !== 1) {
                    setSentence(prev => prev = userTextSplit1.length - 1);
                } else {
                    setSentence(prev => prev = "0");
                    }
                } else {
                    userText.style.border = "1px solid #FE8159";
                    userText.style.boxShadow = "0 0 10px #FE8159"
                    err.style.display = "flex";
                return ;
                }
            }

            setResult(prev => {

                const handleCount = (arr, el) => {
                let count = 0;

                for (const i of arr) {
                    if (i === el) {
                    count += 1;
                    }
                }

                return count;
                }

                const letter = "abcdefghijklmnopqrstuvwxyz";
                let result1 = [];
                let dublicate = [];
                for (const i of userText.value) {
                if (!dublicate.includes(i)) {
                    if (letter.includes(i.toLowerCase()) && result1.length <= 5) {
                    result1 =  [...result1, [i, handleCount(userText.value, i), "flex"]];
                    dublicate = [...dublicate, i];
                    } else {
                    result1 =  [...result1, [i, handleCount(userText.value, i), "none"]];
                    dublicate = [...dublicate, i];
                    }
                } 
                }

                result1 = result1.sort((a, b) => b[1] - a[1]);

                return prev = result1;
                
            })

        } 

        handleCountCharacter();

        
    }, [text])

    const handleSeeMore = () => {
        const see = document.getElementById("see");
        setResult(prev => {

            const handleCount = (arr, el) => {
            let count = 0;

            for (const i of arr) {
                if (i === el) {
                count += 1;
                }
            }

            return count;
            }

            const letter = "abcdefghijklmnopqrstuvwxyz";
            let result1 = [];
            let dublicate = [];
            for (const i of userText.value) {
            if (!dublicate.includes(i)) {
                if (letter.includes(i.toLowerCase()) && result1.length <= 5) {
                result1 =  [...result1, [i, handleCount(userText.value, i), "flex"]];
                dublicate = [...dublicate, i];
                } else {
                result1 =  [...result1, [i, handleCount(userText.value, i), "flex"]];
                dublicate = [...dublicate, i];
                }
            } 
            }

            seeMore.style.display = "none";
            seeLess.style.display = "block";

            result1 = result1.sort((a, b) => b[1] - a[1]);

            return prev = result1;

        })
    }

    const handleSeeLess = () => {
        setResult(prev => {

            const handleCount = (arr, el) => {
            let count = 0;

            for (const i of arr) {
                if (i === el) {
                count += 1;
                }
            }

            return count;
            }

            const letter = "abcdefghijklmnopqrstuvwxyz";
            let result1 = [];
            let dublicate = [];
            for (const i of userText.value) {
            if (!dublicate.includes(i)) {
                if (letter.includes(i.toLowerCase()) && result1.length <= 5) {
                result1 =  [...result1, [i, handleCount(userText.value, i), "flex"]];
                dublicate = [...dublicate, i];
                } else {
                result1 =  [...result1, [i, handleCount(userText.value, i), "none"]];
                dublicate = [...dublicate, i];
                }
            } 
            }

            seeMore.style.display = "block"
            seeLess.style.display = "none";

            result1 = result1.sort((a, b) => b[1] - a[1]);

            return prev = result1;

        })
    }   

    return <Presentation handleChange={handleChange} character={character} check={check} chek1={chek1} word={word} sentence={sentence} handleSeeLess={handleSeeLess} handleSeeMore={handleSeeMore} result={result} setCheck={setCheck} setChek1={setChek1} mode={mode}  setMode={setMode} />
}

export default Container;