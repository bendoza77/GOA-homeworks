import { userForm } from "../hooks/useForm";
import { Link } from "react-router-dom";

const Authorization = ({handleAutho, error}) => {

    const handleSubmit = userForm();

    return (
        <>
        <h1>Authorization</h1>
            <form onSubmit={(e) => handleSubmit(e, handleAutho)}>
                <label htmlFor="userEmail">Enter your email</label> <br />
                <input type="email" name="userEmail" id="userEmail" required/> <br /><br />
                <label htmlFor="userPassword">Enter your password</label> <br />
                <input type="password" name="userPassword" id="userPassword" required/> <br /><br />
                <p>Dont have account? <Link to={"/register"}>Register</Link></p>

                <p style={{color: "red"}}>{error ? "Email or Password is wrong" : ""}</p>
                <button>Authorization</button>
            </form>
        </>
    );

}

export default Authorization;