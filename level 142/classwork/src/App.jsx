import Child from "./components/Child";
import { ErrorBoundary } from "./components/ErrorBoundary.JSX";

const App = () => {

  return (
    <>
      <ErrorBoundary>
        <Child />
        <Child />
      </ErrorBoundary>

      <ErrorBoundary>
         <Child />
      </ErrorBoundary>

      <Child /> 
    </>
  );



}

export default App
