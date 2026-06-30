export function renderTodoItem(todo) {
  return `
    <li class="todo-item">
      <input type="checkbox" class="toggle" data-id="${todo.id}" ${todo.completed ? "checked" : ""}>

      ${todo.editing
        ? `<input class="edit-input" data-id="${todo.id}" value="${todo.text}">`
        : `<span class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">${todo.text}</span>`}

      <button class="delete" data-id="${todo.id}">X</button>
    </li>
  `;
}
