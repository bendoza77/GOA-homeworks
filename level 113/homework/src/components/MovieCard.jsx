import { useState } from "react";

let change = false;

const MovieCard = (props) => {

    const [smallDec, setDec] = useState("The small description: " + props.description);

    const handleFullDec = () => {
        change = true;
        setDec("The full Description: " + props.fullDec);
    }

    const handleSmallDec = () => {
        change = false;
        setDec("The small description: " + props.description);
    }

    return (
        <>
            <div className="movieDiv">
                <h1>{props.title}</h1>
                <img src={props.image} alt="" />
                <p>{smallDec}</p>
                <button onClick={!change ? () => handleFullDec() : () => handleSmallDec()}>{change ? "Show small description" : "Show full description"}</button>
            </div>
        </>
    );

}


export default MovieCard;