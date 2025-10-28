import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import type { Task } from "./types";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]);
    navigate("/tasks");
  };

  const toggleComplete = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (updatedTask: Task) => {
    setTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const menuItems = [
    { name: "Today’s tasks", path: "/" },
    { name: "All tasks", path: "/tasks" },
    { name: "Completed tasks", path: "/tasks/completed" },
    { name: "Uncompleted tasks", path: "/tasks/uncompleted" },
    
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 flex flex-col shadow-lg">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-700">Task Manager</h2>
        </div>

        <div className="flex-1 p-4 flex flex-col">
          <button
            onClick={() => navigate("/add-task")}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg mb-6 font-semibold transition"
          >
            + Add Task
          </button>

          <nav className="flex-1 space-y-2 text-gray-700">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 rounded-lg transition font-medium ${
                  location.pathname === item.path
                    ? "bg-purple-50 border-r-4 border-purple-500 text-purple-700"
                    : "hover:bg-purple-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggleComplete={toggleComplete}
                onEdit={editTask}
              />
            }
          />
          <Route
            path="/tasks/completed"
            element={
              <Tasks
                tasks={tasks.filter((task) => task.completed)}
                onDelete={deleteTask}
                onToggleComplete={toggleComplete}
                onEdit={editTask}
              />
            }
          />
          <Route
            path="/tasks/uncompleted"
            element={
              <Tasks
                tasks={tasks.filter((task) => !task.completed)}
                onDelete={deleteTask}
                onToggleComplete={toggleComplete}
                onEdit={editTask}
              />
            }
          />
         
          <Route path="/add-task" element={<AddTask addTask={addTask} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
