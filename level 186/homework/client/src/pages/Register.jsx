import { useAuth } from "../context/AuthContext";

const Register = () => {

    const { register } = useAuth();

    const handleSubmit = (e) => {

        e.preventDefault();

        const userObj = {
            username: e.target.userName.value,
            email: e.target.userEmail.value,
            password: e.target.userPassword.value
        }

        register(userObj);
        e.target.reset();

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" placeholder="Enter Your Name" required/>
                <input type="email" name="userEmail" placeholder="Enter Your Email" required/>
                <input type="password" name="userPassword" placeholder="Enter Your Password" required/>
                <button>Register</button>
            </form>
        </>
    );


}

export default Register