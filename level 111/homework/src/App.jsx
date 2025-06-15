import { useState } from "react";

const App = () => {

    // Task 1

    const [taskList, setTaskList] = useState([]);

    const handleClick = () => {
        const input = document.getElementById("task-input");
        if(input.value) {
            setTaskList([...taskList, input.value]);
            input.value = "";
        }
    }

    const handleDelete = (index) => {
        setTaskList(taskList.filter((el, i) => i !== index))
    }

    return (
        <main>
            <input type="text" id="task-input" placeholder="Enter new task" />
            <button onClick={handleClick}>Add Task</button>
            <h1>Tasks List</h1>
            <ul>
                {taskList.map((curValue, index) => (
                    <>
                        <li key={index}>{curValue}</li>
                        <button onClick={() => handleDelete(index)}>delete</button>
                    </>
                ))
                }
            </ul>
        </main>
    );


    // Task 2

    // Hooks in JSX refer to the hooks that React depends on because it is with the help of 
    // these hooks that we can manage the site and make it interactive, give the site some functionality 
    // and completely control it. I do this through hooks. One of the hooks is the useState hook, which helps
    //  us make the site more interactive. useState is a hook, but it is given as a list and there are always 
    // two elements in it, the initial state and the second is a function, through which we can already perform
    //  certain actions on the site. When we pass an argument to useState, for example, useState("hello), this 
    // argument reflects the first element, or the initial state, and we use useState because with the help of 
    // these hooks we can manage and control the site. These hooks transmit a signal to the DOM that 
    // something has changed on the site, and without them, all this is impossible.
}

export default App;
