// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event Listener for Adding a Task
todoForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');

  // Task Text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    todoList.removeChild(listItem);
  });

  // Toggle Completion
  taskSpan.addEventListener('click', function () {
    listItem.classList.toggle('completed');
  });

  // Append elements
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // Clear input
  todoInput.value = '';
});
