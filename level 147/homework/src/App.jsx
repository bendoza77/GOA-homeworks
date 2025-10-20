import { useState } from "react"
import Greed from "./components/Greed";

const App = () => {

    // Task 1

    const [name, setName] = useState("");
    const [click, setClick] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault()
        const { userName } = e.target;

        setName(userName.value);
        e.target.reset();

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" placeholder="Enter name" /> <br />
                <button>Submit</button>
            </form>

            <Greed name={name} />

            <button onClick={() => setClick(!click)}>click me</button>
            <p>{click ? "button was clicked" : ""}</p>
        </>
    );


    // Task 2

    // The React.memo() function is used to prevent a component from being rendered unnecessarily,
    // which wastes time and resources. It checks if any of the props passed to the component have changed, 
    // then it will be rendered, otherwise it will not be rendered. 
    // This helps us avoid rendering the component unnecessarily due to small changes.

}

export default App
