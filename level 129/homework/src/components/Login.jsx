import { useForms } from "../hooks/useForms";

const Login = ({handleLogin}) => {

    const handleSubmit = useForms();

    return (
        <>
            <h1>Login in</h1>
            <form onSubmit={(e) => handleSubmit(e, handleLogin)}>
                <label htmlFor="userEmail">Enter Your Email</label> <br />
                <input type="email" name="userEmail" id="userEmail" />
                <br /><br />

                <label htmlFor="userPassword">Enter Your Password</label><br />
                <input type="password" name="userPassword" id="userPassword" />
                <br /><br />

                <button>Submit</button>
            </form>
        </>
    );


}

export default Login;