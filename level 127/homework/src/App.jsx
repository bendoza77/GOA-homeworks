import { useChangeBorderRadius } from "./hooks/useChangeBorderRadius";
import { userLogin } from "./hooks/userLogin";
import { userRegister } from "./hooks/userRegister";

const App = () => {

  const [radius, setRadius] = useChangeBorderRadius();
  const [register, setRegister] = userRegister();
  const [login, setLogin] = userLogin();

  return (
    <>
      {/* Example 1 */}

      <div style={{borderRadius: radius}} className="container"></div>
      <button onClick={() => setRadius("10px")}>Border Radius 10</button>
      <button onClick={() => setRadius("15px")}>Border Radius 15</button>
      <button onClick={() => setRadius("20px")}>Border Radius 20</button>

      {/* Example 2 */}
      <br /><br /><br /><br /><br />
      <form onSubmit={setRegister}>
        <label htmlFor="userName">Enter Your Name</label> <br />
        <input type="text" name="userName" id="userName" /> <br /><br />

        <label htmlFor="userLastName">Enter Your Last Name</label><br />
        <input type="text" name="userLastName" id="userLastName" /> <br /><br />

        <label htmlFor="userEmail">Enter Your Email</label><br />
        <input type="email" name="userEmail" id="userEmail" /><br /><br />

        <label htmlFor="userPassword">Enter Your Password</label><br />
        <input type="password" name="userPassword" id="userPassword" /><br />

        <button>Submit</button>
      </form>

      <div>
        <p>Name: {register[0]}</p>
        <p>Last Name: {register[1]}</p>
        <p>Email: {register[2]}</p>
        <p>Password: {register[3]}</p>
      </div>


      {/* Example 3 */}

      <form onSubmit={setLogin}>
        <label htmlFor="email">Enter Your Email</label> <br />
        <input type="email" name="email" id="email" />
        <br /><br />
        <label htmlFor="password">Enter Your Password</label> <br />
        <input type="password" name="password" id="password" />

        <button>Submit</button>
      </form>

      <div>
        <p>Email: {login[0]}</p>
        <p>Password: {login[1]}</p>
      </div>


    </>
  );




}


export default App
