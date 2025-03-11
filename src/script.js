const task = document.getElementById('task');
const taskList = document.getElementById('task-list');
const btn = document.getElementById('btn');



// Evento de clic para agregar la tarea
btn.addEventListener('click', addTask);

taskList.addEventListener("click", function(e){
    if (e.target.tagName === "P") {
        e.target.classList.toggle("done");
    }
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
},false );


function addTask(e) {
    e.preventDefault(); // Evita que el formulario se recargue

    if (task.value.trim() === '') {
        alert("You must write something!");
        return;
    }
    else{
    
        let li = document.createElement('li');
        let p = document.createElement("p");
        p.innerHTML = task.value;
        li.appendChild(p);
        taskList.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        
        task.value = ''; // Limpia el input después de agregar la tarea
    }
}
