// interface

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  tasks: Task[];
}
// const currentUser: User = {
//   id: 1,
//   name: "ajwa",
//   tasks: [],
// };

const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLElement;

// and we use the local stoarage

function loadTasks(): Task[] {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : [];
}

function saveTasks(tasks: Task[]): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add Taksks
let tasks: Task[] = loadTasks();
renderTasks();

function addTask(): void {
  const text = taskInput.value.trim();
  if (!text) return;
  const newTask: Task = {
    id: Date.now(),
    text,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks();

  taskInput.value = "";
}

function toogleTasks(id: number): void {
  tasks = tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          completed: !task.completed,
        }
      : task
  );
  saveTasks(tasks);
  renderTasks();
}

// delete function
function deleteTask(id: number): void {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks(tasks);
  renderTasks();
}

function editTask(id: number): void {
  const li = document.querySelector(`[data-id="${id}"]`) as HTMLElement;
  const task = tasks.filter((t) => t.id === id)[0];
  if (!li || !task) return;

  const span = li.querySelector("span") as HTMLElement;
  const input = document.createElement("input");
  input.type = "text";
  input.value = task.text;
  input.className =
    "bg-grey-400 text-black px-2 py-1 rounded w-full focus:outline-none border border-blue-300";

  span.replaceWith(input);
  input.focus();

  input.addEventListener("blur", saveEdit);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") saveEdit();
  });

  function saveEdit() {
    const newText = input.value.trim();
    if (newText) {
      task.text = newText;
      saveTasks(tasks);
    }
    renderTasks();
  }
}

function renderTasks(): void {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id.toString());
    li.className =
      "flex justify-between items-center bg-gray-700/80 px-4 py-2 rounded-lg";
    li.innerHTML = `<span class="flex items-center  gap-2 cursor-pointer  ${
      task.completed ? "line-through text-gray-400" : ""
    }">
       <i class="fa-solid fa-circle-check ${
         task.completed ? "text-green-400" : "text-blue-400"
       }"></i>
        ${task.text}
      </span>
      <div class="flex gap-3 items-center">
        <button class="text-yellow-400 hover:text-blue-500 transition" title="Edit">
           <i class="fa-solid fa-pen"></i>
        </button>
        <button class="text-red-400 hover:text-red-500 transition" title="Delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      `;
    const taskText = li.querySelector("span") as HTMLElement;
     taskText.addEventListener("click", () => toogleTasks(task.id));

    const editBtn = li.querySelector(".fa-pen")?.parentElement as HTMLElement;
    editBtn.addEventListener("click", () => editTask(task.id));

    const delBtn = li.querySelector(".fa-trash")?.parentElement as HTMLElement;
    delBtn.addEventListener("click", () => deleteTask(task.id));

    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e: KeyboardEvent) => {
  if (e.key === "Enter") addTask();
});
