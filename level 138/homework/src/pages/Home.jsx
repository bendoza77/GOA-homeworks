import { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import { SetLocalStorage } from "../utils/LocalStorage";

const Home = () => {

    const { setNote } = useContext(NoteContext);
    const [text, setText] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        const { userNote } = e.target;

        if (userNote.value.trim()) {
            setNote(prev => {
                SetLocalStorage("notes", [...prev, userNote.value]);
                return [...prev, userNote.value]
            })
            setText("");
        }
        
    }

    return (
        <>
            <main className="home_main">
                <form onSubmit={handleAdd} className="form">
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" name="userNote" placeholder="Enter your note" required /> <br /><br />
                    <button>Add note</button>
                </form>
            </main>
        </>
    );


}

export default Home