const Presentaitonal = ({user, handleUser}) => {


    return (
        <main>
            <form>
                <label htmlFor="userName">Enter Your Name</label> <br /><br />
                <input onChange={handleUser} type="text" name="userName" id="userName" />

                <br /><br />
                <label htmlFor="userLastName">Enter Your Last Name</label> <br /><br />
                <input onChange={handleUser} type="text" name="userLastName" id="userLastName" />
            </form>

            <div>
                <p>First Name: {user.userName}</p>
                <p>Last Name: {user.userLastName}</p>
            </div>
        </main>
    );
}

export default Presentaitonal;