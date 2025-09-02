import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <>
            <button><Link to={"/"}>Home</Link></button>
            <button><Link to={"/about"}>About</Link></button>
            <button><Link to={"/contact"}>Contact</Link></button>
        </>
    );

}

export default Nav