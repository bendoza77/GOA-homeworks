import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light");

    const changeTheme = (mode) => {
        setTheme(mode);
    }

    return (
        <>
            <ThemeContext.Provider value={{theme, changeTheme}}>
                {children}
            </ThemeContext.Provider>
        </>
    );

}

export default ThemeProvider