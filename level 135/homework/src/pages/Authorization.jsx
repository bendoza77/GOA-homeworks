import { userForm } from "../hooks/useForm";
import { Link } from "react-router-dom";

const Authorization = ({handleAutho, setEmail, setPass, validEmail, validPassword}) => {

    const handleSubmit = userForm();

    return (
        <>
        <h1>Authorization</h1>
            <form onSubmit={(e) => handleSubmit(e, handleAutho)}>
                <label htmlFor="userEmail">Enter your email</label> <br />
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="userEmail" id="userEmail" required/> <br /><br />
                <p style={{display: validEmail ? "block" : "none"}}>Email is wrong</p>
                <label htmlFor="userPassword">Enter your password</label> <br />
                <input onChange={(e) => setPass(e.target.value)} type="password" name="userPassword" id="userPassword" required/> <br /><br />
                <p style={{display: validPassword ? "block" : "none"}}>Password is wrong</p>

                <p>Dont have account? <Link to={"/register"}>Register</Link></p>
                <button>Authorization</button>
            </form>
        </>
    );

}

export default Authorization;