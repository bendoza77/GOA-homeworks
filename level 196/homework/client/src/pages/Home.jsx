import { useEffect } from "react";
import User from "../components/User";
import { useAuth } from "../context/AuthContext";

const Home = () => {

    const { user, users, getUsers } = useAuth();

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <>
            {(user && user.id === 0) && (
                users.map(el => {
                    return <User el={el} />
                })
            )}
        </>
    );


}

export default Home;