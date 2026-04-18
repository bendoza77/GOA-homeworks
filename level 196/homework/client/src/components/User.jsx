import { useAuth } from "../context/AuthContext";

const User = ({el}) => {

    const { user, handledelete } = useAuth();

    return (
        <>
            <div key={`User ${el.id}`}>
                <p>username: {el.username}</p>
                <p>email: {el.email}</p>
                <p>password: {el.password}</p>
                {user.id === 0 && <button onClick={() => handledelete(el.id)}>delete user</button>}
            </div>
        </>
    );



}

export default User