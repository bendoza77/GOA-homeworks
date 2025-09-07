import Card from "./Card";

const User = ({curUser, handleLogOut}) => {

    return (
        <>
            <h1>This is your account</h1>
            <button onClick={handleLogOut}>Log out</button>
            <Card data={curUser} />
        </>
    );
    

}

export default User