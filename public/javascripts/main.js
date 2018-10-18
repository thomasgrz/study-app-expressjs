
//grab the elements of the list forms 
//to be able to respond to new task creation
//as well as task comppletion
let form = document.getElementById("todo-form")
let input = document.getElementById("new-task")
let ul = document.getElementById("todo-list")
let completed = document.getElementById("completed-tasks")
let total = document.getElementById("total-tasks")
let completed_tasks_count = 0
let total_tasks_count = 0

//insert variables into task tracker
completed.innerHTML = completed_tasks_count
total.innerHTML = total_tasks_count



//create new tasks 
form.addEventListener("submit",(event)=>{
    event.preventDefault()//prevent default form action (POST)
    let span = document.createElement("span") // create span to hold todo
    if(!input.value) return;
    span.innerHTML = input.value  //insert new task into span
    input.value = ""  
    let li = document.createElement("li") //create list element
    li.setAttribute("iscomplete",false) 
    let button = document.createElement("button") //create completion button
    let done = document.getElementById("done-list")
    //handle button clicks
    button.addEventListener("click",function(){
        if(li.getAttribute("iscomplete")==="false"){
            completed_tasks_count++
            completed.innerHTML = completed_tasks_count
        }else{
            completed_tasks_count--
            completed.innerHTML = completed_tasks_count
        }
        li.setAttribute("iscomplete",true)
        ul.removeChild(li)
        done.appendChild(li)
        li.removeChild(button)
    })

    button.innerHTML = "complete"
    li.appendChild(span)
    li.appendChild(button)
    li.style.height = "30px"
    ul.appendChild(li)
    total_tasks_count++
    total.innerHTML = total_tasks_count
})