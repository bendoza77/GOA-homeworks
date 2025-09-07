import Admin from "../components/Admin";
import User from "../components/User";

const Home = ({curUser, user, handleLogOut}) => {

    return (
        <>
            {curUser[3] === "admin" ? <Admin handleLogOut={handleLogOut} user={user} /> : <User handleLogOut={handleLogOut} curUser={curUser} />}
        </>
    );


}

export default Home