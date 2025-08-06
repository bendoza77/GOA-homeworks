import { LoginSign } from "./hooks/LoginSign";

const App = () => {

    const [sing, setSign] = LoginSign();
    
    return (
        <>
            <main>
                <h1>Register</h1>
                <form onSubmit={setSign}>
                    <label htmlFor="userName">Enter Your Name</label> <br /><br />
                    <input type="text" name="userName" id="userName" required/><br /><br />

                    <label htmlFor="userLastName">Enter Your Last Name</label><br /><br />
                    <input type="text" name="userLastName" id="userLastName" /><br /><br />


                    <label htmlFor="userEmail">Enter Your Email</label><br /><br />
                    <input type="email" name="userEmail" id="userEmail" required/><br /><br />


                    <label htmlFor="userPassword">Enter Your Passowrd</label><br /><br />
                    <input type="passsword" name="userPassword" id="userPassword" required/><br /><br />

                    <button>Register</button>

                    <h1>Login</h1>
                    <label htmlFor="email">Enter Your Email</label><br /><br />
                    <input type="email" name="email" id="email" /><br /><br />
                    <p>{sing[4] === false ? "Email is incorrect" : ""}</p>

                    <label htmlFor="password">Enter Your Passowrd</label><br /><br />
                    <input type="passsword" name="password" id="password" /><br /><br />
                    <p>{sing[5] === false ? "Password is incorrect" : ""}</p>
                    <button>Login</button>
                </form>

                <div>
                    {sing[4] + sing[5] === 2 ? <div>
                        <p>Name: {sing[0]}</p>
                        <p>Last Name: {sing[1]}</p>
                        <p>Email: {sing[2]}</p>
                        <p>Password: {sing[3]}</p>
                    </div> : "There is no accounte."}
                </div>
            </main>
        </>

    );

}

export default App
