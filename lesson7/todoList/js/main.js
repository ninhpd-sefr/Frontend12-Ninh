var nameToDo = document.getElementById('input-name');
var taskLevel = document.getElementById('input-level')


let tasks = getTaskByLocalStorage();
renderTasks(tasks)

function processList(){
    if(nameToDo.value == ""){
        alert("type again")
        return false
    } 

    var task = {name : nameToDo.value, level : taskLevel.value}
    let tasks = getTaskByLocalStorage();
    tasks.push(task)
    nameToDo.value = "";
    localStorage.setItem("tasks", JSON.stringify(tasks))
    renderTasks(tasks)

}

function getTaskByLocalStorage(){
    return localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
}

function renderTasks(tasks = []){
    let content = ""

    tasks.forEach((task,index)=>{
        content += 
        `
        <tr>
        <td>1</th>
        <td>${task.name}</td>
        <td><span class="badge  ${task.level}Color">${task.level}</span></td>
        <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
        </td>
    </tr>
        `
    })
    document.getElementById("area-list-task").innerHTML = content
}