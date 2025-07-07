import { useState } from "react";
const fecthApi = async (bookName) => {

  try {
    const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${bookName}`);
    const jsonApi = await api.json();
    return jsonApi.items || [{volumeInfo: {
      title: "Not Valid",
      imageLinks: {
        smallThumbnail: null,
        thumbnail: null
      },
      description: "",
      id: null
    }}];

  } catch (error) {
    console.log(error);
  }

}

const App = () => {

  // Task 2

  // useEffect is one of the hooks that is used to create a side effect in a component. useEffect works in three different ways. 
  // UseEffect is passed two arguments. The first is the effect function and the second is an array of dependencies. This is optional. 
  // I wrote it as "included" and not "included". But useEffect is not required because useEffect must have at least one argument. 
  // Here are the three ways. The first way is to pass useEffect only the effect function and not the array of dependencies. 
  // In this case, if there is any small change in the component, it will create a state or something else. The effect function 
  // will be executed and the side effect will occur. The second way is to pass useEffect the effect function and also the array
  // of dependencies. This array must be the state and not some random variable. Then when we enter the effect in this list, 
  // The variable will be implemented only if the list of variables is updated. I am not limited in the number of variables and 
  // can include as many variables as I want. The third way is to pass the effect function and the dependency list to useEffect, 
  // but the list is empty. This means that the effect variable will be 
  // implemented in the component with some small changes, but only once.


  // Task 3
  const [data, setData] = useState([]);

  const handleApi = async (e) => {
    try {
      e.preventDefault();
      const result = await fecthApi(e.target.bookName.value);

      setData(result);
    } catch (error) {
        console.log(error);
      
    }


  }


  return (
    <>
      <form onSubmit={handleApi}>
        <label htmlFor="userName">Enter your name</label> <br /><br />
        <input type="text" name="bookName" id="bookName" /> <br /><br />
        <button>Submit</button>
        <p id="text"></p>
      </form>

      <section>
        <h1>The Book List</h1>

       {
          data.map(el => {
            return (

              <>
                <div key={el.id}>
                  <h1>{el.volumeInfo.title}</h1>
                  <img src={el.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
                  <p>{el.volumeInfo?.description}</p>
                </div>
              </>

            );

          })

        }

        
      </section>

    </>
  );



 
}

export default App;



