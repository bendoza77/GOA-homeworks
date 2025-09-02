import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <>
            <Link to={"/"}><button>Home</button></Link>
            <Link to={"/about"}><button>About</button></Link>
            <Link to={"/contact"}><button>Contact</button></Link>
        </>
    );


}

export default Nav