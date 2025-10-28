import { useState } from "react";
import type { Task } from "../types";
import { CheckCircle2, Circle, Trash2, Clock, Pencil } from "lucide-react";

type TasksProps = {
  tasks: Task[];
  onDelete?: (id: number) => void;
  onToggleComplete?: (id: number) => void;
  onEdit?: (updatedTask: Task) => void;
};

const Tasks = ({ tasks, onDelete, onToggleComplete, onEdit }: TasksProps) => {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this task?"))
      onDelete?.(id);
  };

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setDateTime(task.createdAt || new Date().toISOString());
    setCompleted(task.completed || false);
  };

  const saveEdit = () => {
    if (editingTask) {
      onEdit?.({
        ...editingTask,
        title,
        description,
        createdAt: dateTime,
        completed,
      });
      setEditingTask(null);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Task Lists
      </h1>

      {tasks.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-500 text-lg">
            No tasks yet. Add your first one!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tasks.map((task) => {
            const taskDate = task.createdAt || new Date().toISOString();
            const formattedDate = new Date(taskDate).toLocaleDateString();
            const formattedTime = new Date(taskDate).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });

            return (
              <div
                key={task.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl p-5 border-l-4 border-purple-500 relative group cursor-pointer"
              >
                {/* Edit/Delete Buttons */}
                <div className="absolute top-3 right-3 flex gap-1">
                  <button onClick={() => openEditModal(task)} className="p-2">
                    <Pencil className="text-blue-500 w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(task.id)} className="p-2">
                    <Trash2 className="text-red-500 w-5 h-5" />
                  </button>
                </div>

                {/* Task Content */}
                <div
                  className="flex items-start gap-3"
                  onClick={() => onToggleComplete?.(task.id)}
                >
                  {task.completed ? (
                    <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                  ) : (
                    <Circle className="text-purple-500 w-6 h-6 flex-shrink-0" />
                  )}

                  <div className="flex-1">
                    <h2
                      className={`font-semibold text-lg mb-1 ${
                        task.completed
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {task.title}
                    </h2>
                    <p className="text-gray-500 text-sm">{task.description}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>
                        {formattedDate} — {formattedTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-4 flex justify-end">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit Modal */}
      {editingTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg transform transition-all scale-100">
            <h2 className="text-xl text-center font-semibold mb-4">
              Edit Task
            </h2>

            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              className="w-full p-2 mb-3 border rounded shadow-sm focus:ring-2 focus:ring-purple-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task title"
            />
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              className="w-full p-2 mb-3 border rounded shadow-sm focus:ring-2 focus:ring-purple-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task description"
            />
            <label className="block text-sm font-medium mb-1">
              Date & Time
            </label>
            <input
              type="datetime-local"
              className="w-full p-2 mb-3 border rounded shadow-sm focus:ring-2 focus:ring-purple-400"
              value={new Date(dateTime).toISOString().slice(0, 16)}
              onChange={(e) =>
                setDateTime(new Date(e.target.value).toISOString())
              }
            />
            <label className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
                className="accent-purple-500"
              />{" "}
              Completed
            </label>

            <div className="flex justify-end gap-3 mt-3">
              <button
                onClick={() => setEditingTask(null)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 transition-all"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
