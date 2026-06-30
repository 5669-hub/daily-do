import { renderTodoItem } from "./TodoItem";

export function renderTodoList(todos) {
  return `
    <div class="todo-page">
      <h1>Todos</h1>
      <input type="text" id="todo-input" placeholder="Add new task">
      <button id="add">Add</button>
      <ul class="todo-list">
        ${todos.map((todo) => renderTodoItem(todo)).join("")}
      </ul>
      <button onclick="showPage('home-page')">Back</button>
    </div>
  `;
}
