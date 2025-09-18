import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <>
            <div className="nav">
                <div className="title">
                    <h1>Note</h1>
                </div>

                <div className="links">
                    <Link to={"/"}><button>Home</button></Link>
                    <Link to={"/note"}><button>Note</button></Link>
                </div>
            </div>
        </>
    );

}

export default Nav