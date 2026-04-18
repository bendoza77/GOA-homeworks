import { useAuth } from "../context/AuthContext";

const Login = () => {

    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userObj = {
            email: e.target.userEmail.value,
            password: e.target.userPassword.value
        }

        login(userObj);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="userEmail" placeholder="Enter Your Email" required/>
                <input type="password" name="userPassword" placeholder="Enter Your Password" required/>
                <button>Login</button>
            </form>
        </>
    );


}

export default Login;