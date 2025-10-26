import { useCallback, useState } from "react";
import User from "./components/User";

const App = () => {

  const [count, setCount] = useState(0);

  const handleNames = useCallback(() => {

    return ["gabriel", "luka", "niko", "ana", "salome", "data", "andria"];

  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
      <User handleNames={handleNames} />
    </>
  );

  // The reason the user is rendered is because every time you change the count state, 
  // the app is re-rendered, which means the function is being re-executed. So the program 
  // thinks a new function has been created, 
  // so it thinks the props have changed, which means the user component needs to be re-rendered.





}

export default App
