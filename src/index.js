// Import CSS for styling
import "./style/main.css";

// Import state management functions
import { getState, setState, subscribe } from "./state/store";
setState({
  todos: [],
  planning: [],
  journal: []
});
/* ============================================================
  Global function to switch between pages
  Exposed on `window` so inline onclicks (back buttons) work
============================================================ */
window.showPage = function(pageId) {
  const pages = ["home-page", "todos-page", "planning-page", "journal-page"];
  pages.forEach(id => {
    document.getElementById(id).style.display = id === pageId ? "block" : "none";
  });
};

/* ============================================================
  Render Todos Page
  Handles displaying todos and their interactions
============================================================ */
function renderTodos() {
  const container = document.getElementById("todos-page");
  const { todos } = getState();

  container.innerHTML = `
    <h1>Todos</h1>
    <input type="text" id="todo-input" placeholder="Add new task">
    <button id="add">Add</button>
    <ul>
      ${todos.map(todo => `
        <li>
          <!-- Checkbox -->
          <input type="checkbox" class="toggle" data-id="${todo.id}" ${todo.completed ? "checked" : ""}>
          
          <!-- Editable todo -->
          ${todo.editing 
            ? `<input class="edit-input" data-id="${todo.id}" value="${todo.text}">` 
            : `<span class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">${todo.text}</span>`}
          
          <!-- Delete button -->
          <button class="delete" data-id="${todo.id}">X</button>
        </li>
      `).join("")}
    </ul>
    <button onclick="showPage('home-page')">Back</button>
  `;

  // Auto-focus input when editing
  const editingInput = container.querySelector(".edit-input");
  if (editingInput) {
    editingInput.focus();
    editingInput.selectionStart = editingInput.selectionEnd = editingInput.value.length;
  }
}

/* ============================================================
  Render Planning Page
  Shows the planning textarea and saves input to state
============================================================ */
function renderJournal() {
  const container = document.getElementById("journal-page");
  const { journal } = getState();

  container.innerHTML = `
    <h1>Journal</h1>

    <input id="journal-input" placeholder="Write something...">
    <button id="add-journal">Add</button>

    <ul>
      ${journal.map((entry, index) => `
        <li>
          ${entry}
          <button class="delete-journal" data-index="${index}">X</button>
        </li>
      `).join("")}
    </ul>

    <button onclick="showPage('home-page')">Back</button>
  `;
}

/* ============================================================
  Render Journal Page
  Shows the journal textarea and saves input to state
============================================================ */
function renderPlanning() {
  const container = document.getElementById("planning-page");
  const { planning } = getState();

  container.innerHTML = `
    <h1>Planning</h1>

    <input id="plan-input" placeholder="Add a plan">
    <button id="add-plan">Add</button>

    <ul>
      ${planning.map((item, index) => `
        <li>
          ${item}
          <button class="delete-plan" data-index="${index}">X</button>
        </li>
      `).join("")}
    </ul>

    <button onclick="showPage('home-page')">Back</button>
  `;
  console.log(getState().planning);
}

/* ============================================================
  Main Document Ready Function
  Attaches all button events and initial page render
============================================================ */
document.addEventListener("DOMContentLoaded", () => {

  // Home page buttons
  document.getElementById("link-todos").addEventListener("click", () => {
    showPage("todos-page");
    renderTodos();
  });
  document.getElementById("link-planning").addEventListener("click", () => {
    showPage("planning-page");
    renderPlanning();
  });
  document.getElementById("link-journal").addEventListener("click", () => {
    showPage("journal-page");
    renderJournal();
  });

  /* ============================================================
    Todo Page Event Listeners (Delegated to document)
    Handles adding, toggling, deleting, and editing todos
  ============================================================ */
  document.addEventListener("click", (e) => {

    // Add new todo
    if (e.target.id === "add") {
      const input = document.getElementById("todo-input");
      const value = input.value.trim();
      if (!value) return;

      const newTodo = { id: Date.now(), text: value, completed: false, editing: false };

      setState({ todos: [...getState().todos, newTodo] });
      input.value = "";
      renderTodos();
    }

    // Toggle todo completion
    if (e.target.classList.contains("toggle")) {
      const id = Number(e.target.dataset.id);
      const updated = getState().todos.map(todo => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      });
      setState({ todos: updated });
      renderTodos();
    }

    // Delete todo
    if (e.target.classList.contains("delete")) {
      const id = Number(e.target.dataset.id);
      const updated = getState().todos.filter(todo => todo.id !== id);
      setState({ todos: updated });
      renderTodos();
    }

    function renderJournal() {
  const container = document.getElementById("journal-page");
  const { journal } = getState();

  container.innerHTML = `
    <h1>Journal</h1>

    <input id="journal-input" placeholder="Write something...">
    <button id="add-journal">Add</button>

    <ul>
      ${journal.map((entry, index) => `
        <li>
          ${entry}
          <button class="delete-journal" data-index="${index}">X</button>
        </li>
      `).join("")}
    </ul>

    <button onclick="showPage('home-page')">Back</button>
  `;
}

if (e.target.id === "add-plan") {
  const input = document.getElementById("plan-input");
  const value = input.value.trim();
  if (!value) return;

  setState({
    planning: [...getState().planning, value]
  });

  renderPlanning();
}
if (e.target.classList.contains("delete-plan")) {
  const index = e.target.dataset.index;

  const updated = getState().planning.filter((_, i) => i != index);

  setState({ planning: updated });
  renderPlanning();
}
if (e.target.id === "add-journal") {
  const input = document.getElementById("journal-input");
  const value = input.value.trim();
  if (!value) return;

  setState({
    journal: [...getState().journal, value]
  });

  renderJournal();
}
if (e.target.classList.contains("delete-journal")) {
  const index = e.target.dataset.index;

  const updated = getState().journal.filter((_, i) => i != index);

  setState({ journal: updated });
  renderJournal();
}
    // Enable editing
    if (e.target.tagName === "SPAN" && e.target.dataset.id) {
      const id = Number(e.target.dataset.id);
      const updated = getState().todos.map(todo => {
        if (todo.id === id) return { ...todo, editing: true };
        return todo;
      });
      setState({ todos: updated });
      renderTodos();
    }
  });

  // Save edited todo on Enter key
  document.addEventListener("keydown", (e) => {
    if (e.target.classList.contains("edit-input") && e.key === "Enter") {
      const id = Number(e.target.dataset.id);
      const value = e.target.value.trim();
      if (!value) return;

      const updated = getState().todos.map(todo => {
        if (todo.id === id) return { ...todo, text: value, editing: false };
        return todo;
      });

      setState({ todos: updated });
      renderTodos();
    }
  });

  // Initial page: show home
  showPage("home-page");
});