import { use, useState } from "react";

const LoginSign = () => {

    const [accounte, setAccounte] = useState([])

    const handleLogin = (e) => {
        e.preventDefault();
        const { userName, userLastName, userEmail, userPassword, email, password } = e.target;

        if (email.value.trim() !== "" && password.value.trim() !== "") {
            setAccounte(prev => prev = [userName.value, userLastName.value, userEmail.value, userPassword.value, email.value === userEmail.value, password.value === userPassword.value])
        } else {
            setAccounte(prev => prev = [userName.value, userLastName.value, userEmail.value, userPassword.value])
        }

    }

    return [accounte, handleLogin];
}

export { LoginSign };