const todos = ["Go to the grocery", "Do the Laundry", "Walk the dog"];
const todoList = document.getElementById("todoList");
const searchInput = document.getElementById("search");

function renderTodos(filter = "") {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    if (todo.toLowerCase().includes(filter.toLowerCase())) {
      const todoDiv = document.createElement("div");
      todoDiv.className = "todo";
      todoDiv.innerHTML = `
        ${todo}
        <i onclick="deleteTodo(${index})">🗑️</i>
      `;
      todoList.appendChild(todoDiv);
    }
  });
}

function addTodo() {
  const newTodo = document.getElementById("newTodo").value.trim();
  if (newTodo) {
    todos.push(newTodo);
    document.getElementById("newTodo").value = "";
    renderTodos(searchInput.value);
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos(searchInput.value);
}

searchInput.addEventListener("input", () => {
  renderTodos(searchInput.value);
});

renderTodos();
