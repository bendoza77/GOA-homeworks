import { useAuth } from "../context/AuthContext";

const User = ({el}) => {

    const { user, handleDelete } = useAuth();

    return (
        <>
            <div key={`User ${el.id}`}>
                <p>username: {el.username}</p>
                <p>email: {el.email}</p>
                <p>password: {el.password}</p>
                {user.id === 0 && <button onClick={() => handleDelete(el.id)}>delete user</button>}
            </div>
        </>
    );



}

export default User