import "./style/main.css";
import { getState, setState, subscribe } from "./state/store";

const app = document.getElementById("app");
function renderTodos() {
  const container = document.getElementById("todos-page");
  const { todos } = getState(); // get todos from state

  container.innerHTML = `
    <h1>Todos</h1>
    <input type="text" id="todo-input" placeholder="Add new task">
    <button id="add">Add</button>
    <ul>
      ${todos.map(todo => `
        <li>
          <input type="checkbox" class="toggle" data-id="${todo.id}" ${todo.completed ? "checked" : ""}>
          ${todo.editing ? `<input class="edit-input" data-id="${todo.id}" value="${todo.text}">` : `<span class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">${todo.text}</span>`}
          <button class="delete" data-id="${todo.id}">X</button>
        </li>
      `).join("")}
    </ul>
    <button onclick="showPage('home-page')">Back</button>
  `;
}
function renderPlanning() {
  const container = document.getElementById("planning-page");
  container.innerHTML = `
    <h1>Planning</h1>
    <textarea id="planning-area" placeholder="Plan your day...">${getState().planning}</textarea>
    <button onclick="showPage('home-page')">Back</button>
  `;

  // Update state on input
  document.getElementById("planning-area").addEventListener("input", (e) => {
    setState({ planning: e.target.value });
  });
}
function renderJournal() {
  const container = document.getElementById("journal-page");
  container.innerHTML = `
    <h1>Journal</h1>
    <textarea id="journal-area" placeholder="Write your thoughts...">${getState().journal}</textarea>
    <button onclick="showPage('home-page')">Back</button>
  `;

  // Update state on input
  document.getElementById("journal-area").addEventListener("input", (e) => {
    setState({ journal: e.target.value });
  });
}
// function render() {
//   // Call getState() to retrieve the current global application state
//   // The state object currently contains { todos: [...] }
//   const { todos } = getState();
//   // This uses OBJECT DESTRUCTURING
//   // It extracts the "todos" property from the state object
//   // Equivalent to: const todos = getState().todos

//   // Replace the HTML content inside the element with id="app"
//   // This effectively redraws the entire UI whenever state changes
//   app.innerHTML = `
  
//     <!-- Main wrapper that holds the entire application -->
//     <div class="container">
  
//       <!-- Header section at the top of the page -->
//       <header class="header">
  
//         <!-- Main title of the application -->
//         <h1>Daily Do</h1>
  
//       </header>
  
  
//       <!-- Main content layout containing 3 sections -->
//       <main class="main-layout">
  
  
//         <!-- ============================= -->
//         <!-- TODO SECTION -->
//         <!-- ============================= -->
//         <section class="todo-section">

//   <h2>Todos</h2>

//   <div class="todo-input-area">
//     <input id="todo-input" placeholder="Enter a task">
//     <button id="add">Add</button>
//   </div>

//   <ul class="todo-list">

//     ${
//       todos.map(todo => `
//         <li class="todo-item">

//           <input 
//             type="checkbox"
//             class="toggle"
//             data-id="${todo.id}"
//             ${todo.completed ? "checked" : ""}
//           >
//           ${
//             todo.editing
//               ? `
//                 <input 
//                   class="edit-input"
//                   data-id="${todo.id}"
//                   value="${todo.text}"
//                 >
//               `
//               : `
//                 <span 
//                   class="${todo.completed ? "completed" : ""}"
//                   data-id="${todo.id}"
//                 >
//                   ${todo.text}
//                 </span>
//               `
//           }

//           <button data-id="${todo.id}" class="delete">
//             X
//           </button>

//         </li>
//       `).join("")
//     }

//   </ul>

// </section>
  
  
  
//         <!-- ============================= -->
//         <!-- PLANNING SECTION -->
//         <!-- ============================= -->
//         <section class="planning-section">
  
//           <!-- Title for the planning area -->
//           <h2>Planning</h2>
  
//           <!-- Textarea allows multi-line text input -->
//           <!-- This will later hold daily planning notes -->
//           <textarea
//             id="planning-area"
//             placeholder="Plan your day..."
//           ></textarea>
  
//         </section>
  
  
  
//         <!-- ============================= -->
//         <!-- JOURNAL SECTION -->
//         <!-- ============================= -->
//         <section class="journal-section">
  
//           <!-- Title for the journal area -->
//           <h2>Journal</h2>
  
//           <!-- Textarea where users can write reflections -->
//           <textarea
//             id="journal-area"
//             placeholder="Write your thoughts..."
//           ></textarea>
  
//         </section>
  
//       </main>
  
//     </div>
  
//     `;
//     // Focus the input if a todo is being edited
// const editingInput = document.querySelector(".edit-input");
// if (editingInput) {
//   editingInput.focus(); // moves the cursor inside the input
//   // optional: move cursor to the end
//   editingInput.selectionStart = editingInput.selectionEnd = editingInput.value.length;
// } 
// }
window.showPage = function(pageId) {
  const pages = ["home-page", "todos-page", "planning-page", "journal-page"];
  pages.forEach(id => {
    document.getElementById(id).style.display = id === pageId ? "block" : "none";
  });
}
subscribe(renderTodos);
renderTodos();
document.addEventListener("DOMContentLoaded", () => {
  // Now the DOM exists, these IDs exist
  document.getElementById("link-todos").addEventListener("click", () => showPage("todos-page"));
  document.getElementById("link-planning").addEventListener("click", () => showPage("planning-page"));
  document.getElementById("link-journal").addEventListener("click", () => showPage("journal-page"));
});
document.addEventListener("click", (e) => {
  if (e.target.id === "add") {
    const input = document.getElementById("todo-input");
    const value = input.value;

    if (value.trim() === "") return;

    setState({
        todos: [
            ...getState().todos,
            {
              id: Date.now(),
              text: value,
              completed: false,
              editing: false

            }
          ]
    });
    input.value = "";
  }
  
  // toggle completion when checkbox clicked
  if (e.target.classList.contains("toggle")) {
  
    const id = Number(e.target.dataset.id);
  
    const updated = getState().todos.map(todo => {
  
      if (todo.id === id) {
  
        return {
          ...todo,
          completed: !todo.completed
        };
  
      }
  
      return todo;
    });
  
    setState({
      todos: updated
    });
  
  }
  // double click to edit
if (e.target.tagName === "SPAN") {

  const id = Number(e.target.dataset.id);

  const updated = getState().todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, editing: true };
    }
    return todo;
  });

  setState({ todos: updated });
}

  if (e.target.classList.contains("delete")) {

    const id = Number(e.target.dataset.id);
  
    const updated = getState().todos.filter(todo => todo.id !== id);
  
    setState({
      todos: updated
    });
  
  }
});

// Save edited todo when Enter is pressed
document.addEventListener("keydown", (e) => {
  // Only run if the target is an input for editing
  if (e.target.classList.contains("edit-input") && e.key === "Enter") {

    const id = Number(e.target.dataset.id); // get the todo id
    const value = e.target.value.trim();    // new text

    if (value === "") return; // optional: prevent empty todos

    // Update the todo in state
    const updated = getState().todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text: value,
          editing: false  // exit edit mode
        };
      }
      return todo;
    });

    setState({ todos: updated });
  }
});