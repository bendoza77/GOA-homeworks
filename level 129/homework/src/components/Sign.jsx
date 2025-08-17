import { useForms } from "../hooks/useForms";


const Sign = ({handleSing, em, pass}) => {

    const handleSubmit = useForms();

    return (
        <>
            <h1>Sign up</h1>
            <form onSubmit={(e) => handleSubmit(e, handleSing)}>
                <label htmlFor="userName">Enter Your Name</label><br />
                <input type="text" name="userName" id="userName" required/>
                <br /><br />

                <label htmlFor="userLastName">Enter Your Last Name</label><br />
                <input type="text" name="userLastName" id="userLastName" required/>
                <br /><br />

                <label htmlFor="userEmail">Enter Your Email</label> <br />
                <input type="email" name="userEmail" id="userEmail" required/>
                <p style={{color: "red", display: em}}>Email is alread used</p>
                <br /><br />

                <label htmlFor="userPassword">Enter Your Password</label><br />
                <input type="password" name="userPassword" id="userPassword" required/>
                <p style={{color: "red", display: pass}}>Password is already used</p>
                <br /><br />

                <button>Submit</button>
            </form>
        </>
    );


}

export default Sign;