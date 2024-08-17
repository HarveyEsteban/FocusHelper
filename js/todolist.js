let todoInput = document.getElementById('input-tds');
let addtsk = document.getElementById('addTask-btn');
let taskPHD = document.getElementById('taskPlaceholder');

addtsk.addEventListener('click', () => {

    let task = document.createElement('div');
    task.classList.add('task');

    let li  = document.createElement('li');
    li.innerHTML = `${todoInput.value}`;
    task.appendChild(li);

    let check = document.createElement('Button');
    check.innerHTML = "<i class='fa-solid fa-check'></i>"
    check.classList.add("task-Check");
    task.appendChild(check);

    taskPHD.appendChild(task);

    check.addEventListener('click', () => {
        task.style.textDecoration = "line-through";
    })
});
