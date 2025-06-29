import { useState } from "react";

const App = () => {

  const [student, setStudent] = useState([]);

  const handleStudent = (e) => {
    e.preventDefault();
    const { userName, userGrade } = e.target;
    setStudent(prev => {
      return [...prev, {id: Date.now(),  name: userName.value, grade: userGrade.value}];
    })
  }


  const handleDelete = (index) => {
    setStudent(student.filter((_, i) => i !== index));
  }

  const handleSortHighestToLowest = () => {
    setStudent([...student].sort((a, b) => b.grade - a.grade))
  }

  const handleSortSlowestToHighest = () => {
    setStudent([...student].sort((a,b) => a.grade - b.grade))
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
      <br />
      <button onClick={handleSortSlowestToHighest}>Sort lowest to highet</button>
      <button onClick={handleSortHighestToLowest}>Sort highet to lowest</button>
    

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
