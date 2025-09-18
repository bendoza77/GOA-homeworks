import { createContext, useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "../utils/LocalStorage";

export const NoteContext = createContext();

const NoteProvider = ({children}) => {

    const [note, setNote] = useState(GetLocalStorage("notes") || []);

    return (
        <>
            <NoteContext.Provider value={{note, setNote}}>
                {children}
            </NoteContext.Provider>
        </>
    );


}

export default NoteProvider