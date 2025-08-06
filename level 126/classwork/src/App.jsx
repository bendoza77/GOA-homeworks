import { useToggle } from "./hooks/useToggle";

const App = () => {

  const [color, setColor] = useToggle()

  return (
    <>
      <div style={{backgroundColor: color, width: "100%", height: "100%"}}>Hello World</div>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("green")}>Green</button>
    </>
  );



}

export default App
