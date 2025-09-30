import { useState, useSyncExternalStore } from "react";

const ChangeColor = ({color, setBg}) => {

    const [click, setClick] = useState(false);

    if (click) {
        throw new Error("Why we need this button?");
    }

    return (
        <>
            <div style={{marginTop: 20, gap: 10, display: "flex"}}>
                <button onClick={() => setBg(color)}>{color}</button>
                <button onClick={() => setClick(true)}>Add</button>
            </div>
        </>
    );


}

export default ChangeColor