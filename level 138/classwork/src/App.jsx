import Greed from "./components/Greed";
import Parent from "./components/Parent";
import { MyFirstContext } from "./context/MyFirstContext";

const App = () => {

  return (
    <>
    {/* Task 1 */}
    {/* I created a context object using createContext and called it MyFirstContext, then 
    I created two components Parent and Child and rendered these two components together and using 
    the provider component I passed my name to the child component with the value using useContext 
    and this is possible because I return the Child component to the Parent component and the provider component through which I
     share information with other components contained the parent component */}
      <MyFirstContext.Provider value={"gabriel"}>
        <Parent />
      </MyFirstContext.Provider>

      {/* Task 2 */}
      {/* Here I created a Greed component and in the same way using the provider component 
      I shared the information, in this case my first and last name, and using 
      the useContext hook I retrieved this shared information into the greed component. */}
      <MyFirstContext.Provider value={"gabriel jobava"}>
        <Greed />
      </MyFirstContext.Provider>
    </>
  );



}

export default App
