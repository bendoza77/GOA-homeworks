import { useState } from "react";

const ToDoList = () => {
    const [taskArr, setAdd] = useState([]);


    const addTask = (e) => {
        e.preventDefault();
        const task = document.getElementById("task");
        const par = document.getElementById("par");
        if (task.value.trim() === "") {
            task.style.border = "1px solid red";
        } else {
            task.style.border = "1px solid black";

        }
        setAdd([...taskArr, task.value.trim()]);
        console.log(taskArr);

    }


    const remove = (element) => {
        setAdd(taskArr.filter((_,index) => index !== element));
    }

    let res = taskArr.map((el, i) => (
        <div>
            <li key={`element ${i}`}>{el}</li>
            <button onClick={() => remove(i)}>Delete</button>
        </div>
    ));

    return (
        <>
            <div>
                <form>
                    <input type="text" name="task" id="task" placeholder="Enter Task to Add"/> <br /> <br />
                    <button onClick={addTask}>add task</button>
                    <p id="par"></p>
                </form>

                <ul>
                    {res}
                </ul>
            </div>
        </>
    );


}


export default ToDoList;