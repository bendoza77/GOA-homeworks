import { useState } from "react";

const fetchApi = async (cityName) => {

  try {

    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=790216e5ba3ca02c6bd1427d4721407a`);
    const jsonApi = await api.json();

    return jsonApi || [{
      name: "Input cant be empty",
      id: "Input cant be empty",
      weather: [{main: "Input cant be empty", description: "Input cant be empty"}],
      wind: {speed: "Input cant be empty", deg: "Input cant be empty"},
    }];

  } catch(error) {
    console.log(error);
  }

}

const App = () => {

  const [data, setData] = useState([]);

  const handleApi = async (e) => {
    try {
      e.preventDefault();

      if (e.target.city.value.trim() === "") {
        setData([{
          name: "Input cant be empty",
          id: "Input cant be empty",
          weather: [{main: "Input cant be empty", description: "Input cant be empty"}],
          wind: {speed: "Input cant be empty", deg: "Input cant be empty"},
        }])
      } else {
        const result = await fetchApi(e.target.city.value);
        setData([result]);
      }

    } catch(error) {
      console.log(error);
    }

  }

  return (
    <>
      <main>
        <form onSubmit={handleApi}>
          <label htmlFor="city">Enter city name</label> <br /><br />
          <input type="text" name="city" id="city" /><br /><br />
          <button>Submit</button>
        </form>

        {data.map(el => {
          return (
            <>
              <div key={el.id}>
                <p>Name: {el.name}</p>
                <p>Weather: {el.weather[0].main}</p>
                <p>Weather description: {el.weather[0].description}</p>
                <p>Wind speed: {el.wind.speed}</p>
                <p>Wind degrees: {el.wind.deg}</p>
              </div>
            </>
          );
        })}
      </main>
    </>
  );


}


export default App;