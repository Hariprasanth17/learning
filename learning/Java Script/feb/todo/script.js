const input = document.getElementById("inval");
const countTask = document.getElementById("count");

const handleTodoRemove = (event) => {
    event.currentTarget.parentElement.remove()
    updatePendingTasksCount();
    updateCompletedTasksCount()
}



const handleRemoveChecked = () => {
    const doneClass = document.querySelectorAll(".done").forEach((e) => {
        e.parentNode.removeChild(e);
    })

    updatePendingTasksCount();
    updateCompletedTasksCount()

}

function handleCheckbox(event) {
    if (event.currentTarget.checked) {
        const checkboxParent = event.currentTarget.parentElement
        checkboxParent.classList.add("done")
        console.log(checkboxParent)

        // clear task
        const clear = document.getElementById("clear");
        clear.addEventListener("click", handleRemoveChecked)

    } else {
        boxCount--;
        clear.innerHTML = `Clear ${boxCount} Completed Task`;
        const checkboxParent1 = event.currentTarget.parentElement
        checkboxParent1.classList.remove("done")
    }

    updatePendingTasksCount();
    updateCompletedTasksCount()

}

function createtodoremoveTtem(text = "") {
    const todo = document.createElement('div');
    todo.setAttribute("class", "todolist-container-inside")

    // Create checkbox
    const todoCompletionInput = document.createElement('input');
    todoCompletionInput.setAttribute("type", "checkbox");
    todoCompletionInput.addEventListener('change', handleCheckbox)
    // create todo text
    const todoText = document.createElement('label');
    todoText.innerText = text;

    const todoRemoveButton = document.createElement('button');
    todoRemoveButton.innerHTML = `<i class="bi bi-x-circle-fill"></i>`

    todoRemoveButton.addEventListener('click', handleTodoRemove)
    // 

    todo.append(todoCompletionInput, todoText, todoRemoveButton)
    return todo;
}

const todoList = document.getElementById('todolist-container');


function updatePendingTasksCount() {
    const pendingTasks = document.querySelectorAll('.todolist-container-inside:not(.done)');
    countTask.innerHTML = `${pendingTasks.length} task left`
}

function updateCompletedTasksCount() {
    const completedTasks = document.querySelectorAll('.todolist-container-inside.done');
    clear.innerHTML = `Clear ${completedTasks.length} Completed Task`;
}



const inputVal = input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && input.value) {
        const todo = createtodoremoveTtem(input.value)
        todoList.appendChild(todo);
        input.value = "";
        updatePendingTasksCount();
        updateCompletedTasksCount();
    }
});

