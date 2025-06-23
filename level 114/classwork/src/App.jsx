// Here I imported the useState hook to monitor the site and manage and control it.
import { useState } from "react";

const App = () => {
  // Here I created a list with two elements, one is the initial state and the other is a function, 
  // and I left both of them to useState because the useState hook is given as a list with two elements, 
  // one is the initial state and the other is a function. 
  // It is through this function that I can perform some useful actions on the site.
  const [userInput, setUserInput] = useState({});

  // Here I have already created an event handler that takes a target as an argument which represents the inputs and I 
  // have created a dict where there are name and value values ​​and it is equal to target because targeti is a single object 
  // I only needed name and value values. Then I used a function which helps me to notify the dom that something has 
  // changed and then I use the callback function and return
  const handleInput = ({target}) => {
    const { name, value } = target;
    setUserInput(prev => {{
      return {...prev, [name]: value}
    }})

  }


  // Here, I'm already returning two inputs in a loop and using an onchange event listener on each input to reflect each change.
  return (
    <>
      <form>
        <label htmlFor="userName">Enter your name</label> <br /> 
        <input type="text" name="userName" id="userName" onChange={handleInput}/>
        <br /><br /><br />
        <label htmlFor="userLastName">Enter your last name</label> <br />
        <input type="text" name="userLastName" id="userLastName" onChange={handleInput}/>
      </form>


      <div>
        <p>The user name: {userInput.userName}</p>
        <p>The user last name: {userInput.userLastName}</p>
      </div>
    </>
  );


}

export default App
