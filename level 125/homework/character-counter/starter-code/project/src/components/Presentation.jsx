import { useState } from "react";
import Result from "./Result";

const Presentation = ({handleChange, character, check, chek1, word, sentence, handleSeeLess, handleSeeMore, result, setCheck, setChek1, mode, setMode}) => {
    const [border, setBorder] = useState(false);

    return (
        <>
            <header>
                <img className="main_logo" onClick={() => window.location.reload()} style={{cursor: "pointer"}} src={!mode ? "./src/images/logo-dark-theme.svg" : "./src/images/logo-light-theme.svg"} alt="" />

                <div style={{backgroundColor: mode ? "#F2F2F7" : "#2f2f2f"}} onClick={() => setMode(prev => prev = !prev)} className="header_icon">
                    <img src={!mode ? "./src/images/icon-sun.svg" : "./src/images/icon-moon.svg"} alt="" />
                </div>
            </header>

            <main>
                <div className="title">
                    <p style={{color: mode ? "black" : "white"}}>Analyze your text <br /> in real-time.</p>
                </div>

                <div className="input">
                    <form>
                        <input  onClick={() => setBorder(prev => prev = !prev)} style={{boxShadow: border ? "0 0 10px #C27CF8" : "none", placeholder: mode ? "#E4E4EF" : "#2A2B37", color : !mode ? "#E4E4EF" : "#2A2B37", backgroundColor: mode ? "#F2F2F7" : "#2f2f2f", borderColor: mode ? "#E4E4EF" : "none", borderWidth: mode ? "1px" : "none", borderStyle: mode ? "solid" : "none", borderColor: border ? "#C27CF8" : "none", borderStyle: border ? "solid" : "none", borderWidth: border ? "1px" : "none"}} onChange={handleChange} type="text" name="userText" id="userText" placeholder="Start typing here... (or paste your text)"/>
                    </form>
                    <div style={{display: "none"}} id="err" className="error">
                        <img src="./src/images/icon-info.svg" alt="" />
                        <p>Limit reached! Your text exceeds {character} characters.</p>
                    </div>

                    <div className="option">
                        <div className="first">
                        {/* The first checkebox of option div */}
                        <div className="chek1">
                            <input onClick={() => setChek1(!chek1)} type="checkbox" name="chek_include" id="chek1" />
                            <p style={{color: mode ? "black" : "white"}}>Exclude Spaces</p>
                        </div>
                        {/* The second checkebox of option div */}
                        <div className="chek2">
                            <input onClick={() => setCheck(!check)} type="checkbox" name="chek_limit" id="chek" />
                            <p style={{color: mode ? "black" : "white"}}>Set Character Limit</p>
                            <input style={{width: 100, display: check ? "flex" : "none", alignItems: "center", justifyContent: "center", textAlign: "center", outline: "none"}} type="text" name="limit" id="limit" />

                        </div>

                    </div>

                    <p style={{color: mode ? "black" : "white"}} className="time">Approx. reading time 1 minute</p>
                </div>
                </div>

                <div className="result_container">
                    <Result number={String(character).length < 2 ? "0" + String(character) : String(character)} text="Total Characters" backgroundColor="#D3A0FA" image="./src/images/pattern-character-count.svg" />
                    <Result number={String(word).length < 2 ? "0" + String(word) : String(word)} text="Word Count" backgroundColor="#FF9F00" image="./src/images/pattern-word-count.svg" />
                    <Result number={String(sentence).length < 2 ? "0" + String(sentence) : String(sentence)}  text="Sentence Count" backgroundColor="#FE8159" image="./src/images/pattern-sentence-count.svg" />
                </div>


                <div className="letters">
                    <h1 className="density" style={{color: mode ? "black" : "white", fontWeight: 500}}>Letter Density</h1>
                    <p style={{fontSize: "1vw" ,color: mode ? "black" : "white"}}>{character === 0 ? "No characters found. Start typing to see letter density." : ""}</p>
                    <div className="letter_result">
                        {result.map((el, index) => {
                            return <div key={`letter ${index}`}>
                                <p style={{color: mode ? "black" : "white"}}>{el[0]}</p>
                                <div style={{backgroundColor: mode ? "#F2F2F7" : "#2A2B37"}} className="stats"><span style={{backgroundColor: "#D3A0FA", height: "100%",  width: `${(el[1])}%`,  borderRadius: "50px"}}></span></div>
                                <p>{el[1]}</p>
                                <p>({el[1]}%)</p>
                            </div>
                        })}
                    </div>
                    <p id="seeMore" onClick={handleSeeMore} style={{fontSize: "1vw",  color: mode ? "black" : "#c0c0c0ff", cursor: "pointer"}}>See more ˅</p>
                    <p id="seeLess" onClick={handleSeeLess} style={{fontSize: "1vw", color: mode ? "black" : "#c0c0c0ff", cursor: "pointer", display: "none"}}>See less ˄</p>
                </div>
                
            </main>

        </>
    );
}

export default Presentation;