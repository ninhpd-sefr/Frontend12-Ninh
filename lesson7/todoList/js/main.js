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
    var task = {name : nameToDo.value, level : taskLevel.value,id: generateString(7)}
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

function generateString(length) {
    let result = ' ';
    const characters ='0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


function editTasks(idIndex){
    let tasks = getTaskByLocalStorage();
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id == idIndex){
            if(tasks.length >= 0){
                nameToDo.value = tasks[i].name
                btnSubmit.setAttribute("id", i);
            }
        }
    }
}


function deleteTasks(idIndex){
    let tasks = getTaskByLocalStorage();
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].id == idIndex){             
            if(confirm("Do you want to delete")){
                tasks.splice(i, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                renderTasks(tasks)
            }
        }
    }
 
}


function renderTasks(tasks = []){
    let content = ""

    tasks.forEach((task,index)=>{
        content += 
        `
        <tr>
        <td>${index+1}</th>
        <td>${task.name}</td>
        <td><span class="badge  ${task.level}Color">${task.level}</span></td>
        <td>
            <button class="btn btn-warning" onclick = "editTasks(${task.id})">Edit</button>
            <button class="btn btn-danger" onclick = "deleteTasks(${task.id})">Delete</button>
        </td>
    </tr>
        `
    })
    document.getElementById("area-list-task").innerHTML = content
}

let btnAddTask = document.querySelector(".btn-open-form-input");

var formInput = document.querySelector(".form-input")
btnAddTask.onclick = function(){
    formInput.style.display = "block";
}

var btnClear = document.querySelector(".btn-clear");
btnClear.onclick = function(){
    if(nameToDo.value != ""){
        nameToDo.value = ""
    } else {
        formInput.style.display = "none";
    }
}