const User = ({User, handleDelete}) => {

    return (
        <>
            <p>{User.name}</p>
            <p>{User.email}</p>
            <p>{User.age}</p>
            <button onClick={() => handleDelete(User.email)}>Delete user</button>
        </>
    );

}

export default User