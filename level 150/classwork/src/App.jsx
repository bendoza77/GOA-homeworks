import { useState } from "react"

const App = () => {

  const [heroes, setHeroes] = useState([]);

  const handleRandomSuperheroes = async () => {

    const { randomSuperhero } = await import("superheroes");
    let heroes = [];

    for (let i = 0; i < 10; i++) {
      heroes.push(randomSuperhero());
    }

    setHeroes(heroes);

  }

  return (
    <>
      <button onClick={handleRandomSuperheroes}>Generate 10 random superheroes</button>
      {heroes.map((el, index) => {
        return <p key={`heroes ${index}`}>{el}</p>
      })}
    </>
  );



}

export default App
