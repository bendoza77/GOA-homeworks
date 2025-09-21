import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext ";

const Toggle = () => {

    const { changeTheme, theme } = useContext(ThemeContext);

    return (
        <>
             <main style={{backgroundColor: theme === "light" ? "white" : "black"}}>
                <button onClick={() => changeTheme("light")}>Light mode</button>
                <button onClick={() => changeTheme("dark")}>Dark mode</button>
             </main>
        </>
    );


}

export default Toggle