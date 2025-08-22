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
    const letter = "abcdefghijklmnopqrstuvwxyz";
    const limit = document.getElementById("limit");
    const userText = document.getElementById("userText");
    const err = document.getElementById("err");

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
    const countElement = (arr, el) => {

        let countArr = 0;

        for (const i of arr) {
            if (i === el) {
                countArr += 1;
            }
        }

        return countArr;

    }

    useEffect(() => {

        const handleCountCharacter = () => {
            
            if (text.userText !== undefined) {

                if (check && limit.value) {
                    userText.setAttribute("maxLength", limit.value);
                if (character > limit.value - 1) {
                    userText.style.border = "1px solid #DA3701";
                    userText.style.boxShadow = "0 0 10px #DA3701";
                    err.style.display = "block"
                } else if (character <= limit.value){
                    userText.style.border = "1px solid #C27CF8";
                    userText.style.boxShadow = "0 0 10px #C27CF8";
                    err.style.display = "none"
                    userText.removeAttribute("maxLength");
                    }
                } else {
                    userText.style.border = "1px solid #C27CF8";
                    userText.style.boxShadow = "0 0 10px #C27CF8";
                    err.style.display = "none"
                    userText.removeAttribute("maxLength");
                }
                if (!chek1) {
                    setCharacter(prev => prev = text.userText.length);
                } else {
                    let filter = "";
                    for (const i of (text.userText)) {
                        if (i !== " ") {
                            filter += i;
                        }
                    }
                    setCharacter(prev => prev = filter.length);
                }

                const countWord = text.userText.trim().split(" ").filter(el => el !== "");
                setWord(prev => prev = countWord.length);

                const countSentence = text.userText.trim().split(".");
                let result = [];
                let first = "";

                for (let i = 1; i < countSentence.length; i++) {
                    if (countSentence[i].trim() === "") {
                        first += countSentence;
                    } else {
                        result.push(first);
                        first = "";
                    }
                }

                result.push(first);

                setSentence(prev => prev = result.length - 1);

            }

        } 

        handleCountCharacter();

        let filterText = new Set();
        if (text.userText !== undefined) {
            for (const i of text.userText) {
                if (letter.includes(i)) {
                    filterText.add(i);
                }
            }
        }
        
        let finalyResult1 = [];

        for (const i of [...filterText].slice(0, 5)) {
            finalyResult1.push([i, countElement(text.userText, i), ((character / countElement(text.userText, i)) * 100).toFixed(2)])
        }

        setResult(prev => prev = finalyResult1.sort((a, b) => b[1] - a[1]));


    }, [text, check, chek1])

    const handleSeeMore = () => {
        let filterText = new Set();
        if (text.userText !== undefined) {
            for (const i of text.userText) {
                if (letter.includes(i)) {
                    filterText.add(i);
                }
            }
        }
        let finalyResult = [];
        for (const i of [...filterText]) {
            finalyResult.push([i, countElement(text.userText, i), ((character / countElement(text.userText, i)) * 100).toFixed(2)])
        }
        setResult(prev => prev = finalyResult.sort((a, b) => b[1] - a[1]));

        seeLess.style.display = "block";
        seeMore.style.display = "none";
    }

    const handleSeeLess = () => {
        let filterText = new Set();
        if (text.userText !== undefined) {
            for (const i of text.userText) {
                if (letter.includes(i)) {
                    filterText.add(i);
                }
            }
        }

        let finalyResult1 = [];
        for (const i of [...filterText].slice(0, 5)) {
            finalyResult1.push([i, countElement(text.userText, i), ((character / countElement(text.userText, i)) * 100).toFixed(2)])
        }
        setResult(prev => prev = finalyResult1.sort((a, b) => b[1] - a[1]));

        seeLess.style.display = "none";
        seeMore.style.display = "block";

    }   

    return <Presentation handleChange={handleChange} character={character} check={check} chek1={chek1} word={word} sentence={sentence} handleSeeLess={handleSeeLess} handleSeeMore={handleSeeMore} result={result} setCheck={setCheck} setChek1={setChek1} mode={mode}  setMode={setMode} />
}

export default Container;