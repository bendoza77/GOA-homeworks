import { useEffect, useState } from "react";

const App = () => {


  const [count, setCount] = useState(localStorage.getItem("count"));

  const handleCount = (e) => {
    e.preventDefault();
    const { time } = e.target; 
    localStorage.setItem("first", time.value);
    localStorage.setItem("count", time.value);
    setCount(localStorage.getItem("count"))
  }

  useEffect(() => {

    const countInterval = setInterval(() => {

      if (localStorage.getItem("count") === "Countdown stoped") {
        clearInterval(countInterval);
      }

      else if (count >= 1) {
        setCount(prev => {
          localStorage.setItem("count", prev - 1);
          return prev - 1;
        })
      }

      clearInterval(countInterval)

    }, 1000)

    return;
    
    
  }, [count])

  const handleRestart = () => {
    localStorage.setItem("count", localStorage.getItem("first"));
    setCount(localStorage.getItem("count"));
  }

  const handleStop = () => {
    localStorage.setItem("count", "Countdown stoped");
    setCount(localStorage.getItem("count"));
  }

 
  
  return (

    <>
      <main>
        <form onSubmit={handleCount}>
          <label htmlFor="time">Enter Time in Seconds to Countdown</label> <br /><br />
          <input type="text" name="time" id="time" required/> <br /><br />
          <button>Start Countdown</button>
        </form>
        <br />

        <button onClick={handleStop}>Stop Countdown</button> <br /><br />
        <button onClick={handleRestart}>Restart</button>

        <p>{count}</p>
        <p>{count === 0 ? "Countdown is over" : ""}</p>
  
      </main>
    </>

  );


}

export default App
