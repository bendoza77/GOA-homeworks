import { useState } from "react"

const userLogin = () => {

    const [login, setLogin] = useState([]);


    const handleLogin = (e) => {

        e.preventDefault()
        const { email, password } = e.target;

        if (localStorage.getItem("accounte").includes(email.value.trim()) && localStorage.getItem("accounte").includes(password.value.trim())) {
            setLogin(prev => {
                return [email.value, password.value];
            })
        }

    }


    return [login, handleLogin];

}

export { userLogin };