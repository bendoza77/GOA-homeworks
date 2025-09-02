import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <>
            <header>
                <img src="../src/assets/logo.png" alt="" />

                <div>
                    <Link to={"/"}><button className="home">Home</button></Link>
                    <Link to={"/panel"}><button className="panel">Panel</button></Link>
                </div>
            </header>
        </>
    );


}

export default Nav