import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Nav = () => {

    const { user, logout } = useAuth();

    return (
        <>
            <Link to={"/"}><button>Home</button></Link>
            <Link to={"/register"}><button>Register</button></Link>
            <Link to={"/login"}><button>Login</button></Link>
            {user && <Link to={"/posts"}><button>Posts</button></Link>}
            {user && <button onClick={logout}>logout</button>}
        </>
    );


}

export default Nav