import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
import Note from "../components/Note";

const Notes = () => {

    const { note } = useContext(NoteContext);

    return (
        <>
            <main className="note_div">
                <h1>{note.length === 0 ? "There is no note" : "Your Note's"}</h1>
                <div style={{backgroundColor: note.length === 0 ? "white" : "rgb(189, 188, 188)"}} className="notes">
                    {note.map((el, index) => {
                        return <Note data={el} index={index} />
                    })}
                </div>
            </main>
        </>
    );


}

export default Notes