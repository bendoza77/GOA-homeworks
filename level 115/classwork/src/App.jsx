import { useState } from "react";

const App = () => {

  const [student, setStudent] = useState([]);

  const handleStudent = (e) => {
    e.preventDefault();
    console.log("hello world")
    const { userName, userGrade } = e.target;
    setStudent(prev => {
      return [...prev, {id: Date.now(),  name: userName.value, grade: userGrade.value}];
    })
  }


  const handleDelete = (index) => {
    setStudent(student.filter((_, i) => i !== index));
  }

  return (
    <>
      <form id="myForm" onSubmit={handleStudent}>
        <label htmlFor="userName">Enter Your Name</label> <br />
        <input type="text" name="userName" id="userName" />
        <br /><br /><br />
        <label htmlFor="userGrade">Enter Your grade</label> <br />
        <input type="text" name="userGrade" id="userGrade" /> <br /><br />
        <button>Submit</button>
      </form>


        {student.map((el, index) => {
          return <div key={`student ${index}`}>
            <p>{el.name}</p>
            <p>{el.grade}</p>
            <button onClick={() => handleDelete(index)}>Delte</button>
          </div>
        })}

    </>
  );


}

export default App
