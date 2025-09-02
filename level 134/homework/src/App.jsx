import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Path from "./Pages/Path";
import Nav from "./Components/Nav";
import Panel from "./Pages/Panel";
import Car from "./Pages/Car";
import Finish from "./Pages/Finish";
import { useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "./utils/LocalStorages";

const App = () => {

    const navigate = useNavigate();
    const [panel, setPanel] = useState(GetLocalStorage("panel") || [])

    const handleCar = (user) => {

        if (user.userName.trim() !== "" && user.userEmail.trim() !== "" && user.userPassword.trim() !== "") {
            setPanel(prev => {
                SetLocalStorage("panel", [...prev, GetLocalStorage("car")]);
                return [...new Set([...prev, GetLocalStorage("car")])]
            })
            navigate("/finish");
        }
    }

    return (
        <>
        <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/panel" element={<Panel setPanel={setPanel} panel={panel} />} />
                <Route path="/finish" element={<Finish />} />
                <Route path="/car" element={<Car handleCar={handleCar} />} />
                <Route path="*" element={<Path />} />
            </Routes>
        </>
    );
    



}

export default App
