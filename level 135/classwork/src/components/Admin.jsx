import Card from "./Card";

const Admin = ({user, handleLogOut}) => {

    return (
        <>
            <h1>All Account</h1>
            <button onClick={handleLogOut}>Log Out</button>
            {user.map((el, i) => {
                return <Card data={el} index={i} />
            })}
        </>
    );
    

}

export default Admin