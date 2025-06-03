function App() {
  function Name() {
    const askName = prompt("Enter Your Name");
    const result = askName.trim() === "" ? alert(`Please Enter Your Name`) : alert(`Your name is ${askName}`);

    return result;
  }


  const button = <button onClick={Name}>Click me</button>;

  return button;

}

export default App
