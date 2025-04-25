const myForm = document.getElementById("myForm");
const taskDiv = document.getElementById("taskDiv");
const result = document.getElementById("result");
let taskCount = 1;

myForm.addEventListener("submit", function(e) {
    e.preventDefault();

    if(myForm.task.value.trim() === ""){
        result.textContent = "Task input can not be empty";
        return;
    } else{
        result.textContent = "";
        let res = JSON.parse(localStorage.getItem("tasks")) || [];
        res.push(myForm.task.value.trim());
        localStorage.setItem("tasks", JSON.stringify(res));

        taskDiv.innerHTML = "";
        for(let i = 0; i<res.length; i++){
            taskDiv.innerHTML += `<div><p>Task: ${res[i]}</p> <button onclick="index(${i})">Remove<button/> </div>`;
        };
    }

})


function local(){
    const newReuslt = JSON.parse(localStorage.getItem("tasks"));

    taskDiv.innerHTML = "";
    for(let i = 0; i<newReuslt.length; i++){
        taskDiv.innerHTML += `<div><p>Task: ${newReuslt[i]}</p> <button onclick="index(${i})">Remove<button/> </div>`;
    };
}

function index(place){
    localStorage.setItem("index", JSON.stringify([place]));
    const element = JSON.parse(localStorage.getItem("tasks"));
    element.splice(place,1);
    localStorage.setItem("tasks", JSON.stringify(element));
    local();
}