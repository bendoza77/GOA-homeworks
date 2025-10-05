import { ErrorBoundary } from "react-error-boundary"
import Child from "./components/Child";
import FallBackUi from "./components/FallBackUi";

const App = () => {

  return (
    <>
    
        <ErrorBoundary FallbackComponent={(props) => <FallBackUi {...props} text="Error at child 1 or child 2" />} >
            <Child num="1" />
            <Child num="2" />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={(props) => <FallBackUi {...props} text="Error at child 3" />} >
            <Child num="3" />
        </ErrorBoundary>

        <Child num="4" />
    </>
  );



}

export default App
