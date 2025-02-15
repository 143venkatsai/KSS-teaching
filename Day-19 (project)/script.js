let todoItemsContainer = document.getElementById("todoItemsContainer");

function getTodoListFromLocalStorage() {
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  if (todoList === null) {
    return [];
  } else {
    return todoList;
  }
}

let todoList = getTodoListFromLocalStorage(); //[]
let todosCount = todoList.length;

addBtn.addEventListener("click", function () {
  let UserInputElement = document.getElementById("userInput");
  let userInputValue = UserInputElement.value;

  if (userInputValue === "") {
    return alert("Please enter a task");
  }

  todosCount = todosCount + 1;
  let newTodo = {
    id: todosCount,
    text: userInputValue,
    isChecked: false,
  };

  todoList.push(newTodo);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  createAndAppendTodo(newTodo);
  console.log(todoList);
  UserInputElement.value = "";
});

function onTodoStatusChange(checkboxId, labelId, todoId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");

  let todoObejectIndex = todoList.findIndex(function (eachTodo) {
    let eachTodoId = "todo" + eachTodo.id;

    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  let todoObject = todoList[todoObejectIndex];
  console.log(todoObject);

  if (todoObject.isChecked === true) {
    todoObject.isChecked = false;
  } else {
    todoObject.isChecked = true;
  }

  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);

  let deleteElementIndex = todoList.findIndex(function (eachTodo) {
    // 2
    let eachTodoId = "todo" + eachTodo.id;

    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  todoList.splice(deleteElementIndex, 1); // [1,2,3,4,5,6,7] // [1,2,4,5,6,7]

  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.id;
  let checkboxId = "checkbox" + todo.id;
  let labelId = "label" + todo.id;

  let todoElement = document.createElement("li");
  todoElement.classList.add("li");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.checked = todo.isChecked;
  inputElement.classList.add("checkbox");

  inputElement.onclick = function () {
    onTodoStatusChange(checkboxId, labelId, todoId);
  };

  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.textContent = todo.text;

  if (todo.isChecked === true) {
    labelElement.classList.add("checked");
  }

  labelContainer.appendChild(labelElement);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt");

  deleteIcon.onclick = function () {
    console.log(todoId);
    onDeleteTodo(todoId);
  };

  labelContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}
