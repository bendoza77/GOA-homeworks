import { useEffect } from "react";
import { userForm } from "../hooks/useForm";
import { Link } from "react-router-dom";


const Register = ({handleRegister, email, setError, setEmail}) => {

    const handleSubmit = userForm();

    useEffect(() => {

        setError(false);
        setEmail(false);

    }, [])

    return (
        <>
        <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e, handleRegister)}>
                <label htmlFor="userName">Enter your name</label> <br />
                <input type="text" name="userName" id="userName" required/> <br /><br />
                <label htmlFor="userEmail">Enter your email</label> <br />
                <input type="email" name="userEmail" id="userEmail" required/> <br /><br />
                <label htmlFor="userPassword">Enter your password</label> <br />
                <input type="password" name="userPassword" id="userPassword" required/> <br /><br />
                <label htmlFor="admin">Admin</label>
                <input type="radio" name="role" value="admin" id="admin" required/> <br />
                <label htmlFor="nonAdmin">User</label>
                <input type="radio" name="role" value="user" id="user" required/> <br /><br />

                <p>Have allready account <Link to={"/autho"}>Authorization</Link></p>
                <p style={{color: "red"}}>{email ? "Email is already used" :  ""}</p>
                <button>Register</button>
            </form>
        </>
    );


}

export default Register