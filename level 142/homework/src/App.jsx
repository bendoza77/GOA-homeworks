import { useState } from "react";
import ChangeColor from "./components/ChangeColor";
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "./components/FallBck";

const App = () => {

    const [bg, setBg] = useState("");

  return (
    <>
        <div style={{width: 200, height: 200, backgroundColor: bg}}></div>
        <ErrorBoundary FallbackComponent={FallBack}>
            <ChangeColor setBg={setBg} color="red" />
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={FallBack}>
            <ChangeColor setBg={setBg} color="blue" />
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={FallBack}>
            <ChangeColor setBg={setBg} color="green" />
        </ErrorBoundary>
    </>
  );

  
//   ErrorBoundery is a way to define the component that we want to test so that an error in 
// that component does not crash the entire site but returns the fallback ui component to the 
// specific area where the error occurred. ErrorBoundery can be implemented as a class component, 
// but the best way is to use a library that comes with the FallBackComponnet attribute, through 
// which we can define the fallback ui component to the area where the error occurred. ErrorBoundery 
// is used to define the component so that the entire site does not crash and that the component does 
// not go beyond this boundary. At the same time, we use ErroBoundery when we want to test the code or add 
// something to our site so that if an error occurs, the entire site does not crash.



}

export default App
