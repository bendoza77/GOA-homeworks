import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import { SetLocalStorage } from "../utils/LocalStorage";

const Note = ({data, index}) => {

    const time = new Date();
    const { setNote } = useContext(NoteContext);

    const handleDelete = () => {

        setNote(prev => {
            SetLocalStorage("notes", prev.filter((_, i) => i !== index));
            return prev.filter((_, i) => i !== index);
        })


    }

    return (
        <>
            <div key={`note ${index}`} className="div">
                <h1>{data}</h1>
                <p>{time.getMonth() + 1}/{time.getDate()}/{time.getFullYear()}</p>
                <button onClick={handleDelete} className="delete">X</button>
            </div>
        </>
    );


}


export default Note