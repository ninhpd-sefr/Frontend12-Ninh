var nameToDo = document.getElementById('input-name');
var taskLevel = document.getElementById('input-level')
var btnSubmit = document.querySelector(".btnSubmit")

let tasks = getTaskByLocalStorage();
renderTasks(tasks)

function processList(){
    if(nameToDo.value == ""){
        alert("type again")
        return false
    } 

    let tasksId = btnSubmit.getAttribute("id");
    var task = {name : nameToDo.value, level : taskLevel.value}
    let tasks = getTaskByLocalStorage();
    if(tasksId == 0 || tasksId){
        tasks[tasksId] = task
        btnSubmit.removeAttribute("id")
    } else {
        tasks.push(task)
    }
    nameToDo.value = "";
    localStorage.setItem("tasks", JSON.stringify(tasks))
    renderTasks(tasks)

}

function getTaskByLocalStorage(){
    return localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
}

function editTasks(id){
    let tasks = getTaskByLocalStorage();

    if(tasks.length >= 0){
        nameToDo.value = tasks[id].name
        btnSubmit.setAttribute("id", id);
    }
}


function deleteTasks(id){
    if(confirm("Do you want to delete")){
        let tasks = getTaskByLocalStorage();
        tasks.splice(id, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks(tasks)
    }
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
            <button class="btn btn-warning" onclick = "editTasks(${index})">Edit</button>
            <button class="btn btn-danger" onclick = "deleteTasks(${index})">Delete</button>
        </td>
    </tr>
        `
    })
    document.getElementById("area-list-task").innerHTML = content
}