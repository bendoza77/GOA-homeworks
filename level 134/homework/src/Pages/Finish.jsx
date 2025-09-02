import { Link } from "react-router-dom";

const Finish = () => {

    return (
        <>
            <main className="finish">
                <h1>Congratulations you saccessufuly add car to panel </h1>
                <Link to={"/"}><button>Home</button></Link>
            </main>
        </>
    );




}

export default Finish;