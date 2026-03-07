import { useState } from "react";
import User from "./components/User";

const App = () => {

  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      age: e.target.userAge.value
    }

    try {

      const req = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      });
      const res = await req.json();

      console.log(res);

      if (!req.ok) {
        throw new Error("Can't get users");
      }

      setUsers(prev => {
        return [...prev, res];
      });

    } catch(error) {
      console.log(error);
    }


  }

  const handleDelete = async (userEmail) => {
    try {

        const req = await fetch(`http://localhost:3000/users?email=${userEmail}`, {
            method: "DELETE"
        });
        const res = await req.json();

        if (!req.ok) {
            throw new Error("Can't delete user");
        }

        setUsers(users.filter(el => el.email !== userEmail));
        

    } catch(error) {
        console.log(error);
    }
  }

  const handleUsers = async () => {
    try {

      const req = await fetch("http://localhost:3000/users");
      const res = await req.json();

      if (!req.ok) {
        throw new Error("Can't get users");
      }

      setUsers(res);

    } catch(error) {
      console.log(error);
    }
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" placeholder="Enter name" required/>
        <input type="email" name="userEmail" placeholder="Enter email" required />
        <input type="number" name="userAge" placeholder="Enter age" required />
        <button>Create user</button>
      </form>

      {users.map(el => {
        return <User User={el} handleDelete={handleDelete} />
      })}

      <button onClick={handleUsers}>See all user</button>
    </>
  );


}

export default App
