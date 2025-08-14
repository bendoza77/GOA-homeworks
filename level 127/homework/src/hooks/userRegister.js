import { useState } from "react";

const userRegister = () => {

    const [register, setRegister] = useState([]);

    const handleRegister = (e) => {
        e.preventDefault();
        const { userName, userLastName, userEmail, userPassword } = e.target;

        if (userName.value.trim() !== "" && userLastName.value.trim() !== "" && userEmail.value.trim() !== "" && userPassword.value.trim() !== "") {
            setRegister(prev => {
                return [userName.value, userLastName.value, userEmail.value, userPassword.value];
            })
            localStorage.setItem("accounte", JSON.stringify([userName.value, userLastName.value, userEmail.value, userPassword.value]))
        }
    }

    return [register, handleRegister];


}

export { userRegister };