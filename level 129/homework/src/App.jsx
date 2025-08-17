import Sign from "./components/Sign";
import Login from "./components/Login";
import { useState } from "react";

const App = () => {

    const [register, setRegister] = useState([]);
    const [display, setDisplay] = useState("none");
    const [em, setEm] = useState("none");
    const [pass, setPass] = useState("none");

    const handleSing = (userInfo) => {

        for (const i of register) {
            if (i[2] === userInfo.userEmail && i[3] === userInfo.userPassword) {
                setEm(prev => prev = "block");
                setPass(prev => prev = "block");
                return;
            } else {
                setEm(prev => prev = "none");
                setPass(prev => prev = "none");
            }
            
            if (i[2] === userInfo.userEmail) {
                setEm(prev => prev = "block");
                return;
            } else {
                setEm(prev => prev = "none");
            }

            if (i[3] === userInfo.userPassword) {
                setPass(prev => prev = "block");
                return;
            } else {
                setPass(prev => prev = "none");
            }
        }

        setEm(prev => prev = "none")
        setPass(prev => prev = "none");

        setRegister(prev => {
            return [...prev, [userInfo.userName, userInfo.userLastName, userInfo.userEmail, userInfo.userPassword]];
        });

    }

    const handleLogin = (userInfo) => {

        for (const i of register) {
            if (i.includes(userInfo.userEmail) && i.includes(userInfo.userPassword)) {
                setDisplay(prev => prev = "block");
            } else {
                setDisplay(prev => prev = "none");
            }
        }


    }

    return (
        <>
            <Sign handleSing={handleSing} em={em} pass={pass} />
            <Login handleLogin={handleLogin}/>
            <p style={{display: display}}>You login saccessufuly</p>
        </>
    );



}

export default App
