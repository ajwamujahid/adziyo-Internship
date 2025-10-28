import React, { useState } from "react";
import type { Task } from "../types";

interface AddTaskProps {
  addTask: (task: Task) => void;
}

const AddTask = ({ addTask }: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !datetime) {
      alert("Please fill all fields!");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      datetime, 
      completed: false,
      createdAt: ""
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setDatetime("");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center"> Add New Task</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600 mb-1">Task Title</label>
          <input type="text" value={title}  onChange={(e) => setTitle(e.target.value)} placeholder="Enter task title"  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"  />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Description</label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Date and Time</label>
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
{/* <div>
<label className="mb-0 flex items-center cursor-pointer"><div className="mr-2 bg-slate-300/[.5] dark:bg-slate-800 w-5 h-5 rounded-full grid place-items-center border border-slate-300 dark:border-slate-700"></div><span className="order-1 flex-1">Mark as important</span>
</label>
<label className="mb-0 flex items-center cursor-pointer"><div className="mr-2 bg-slate-300/[.5] dark:bg-slate-800 w-5 h-5 rounded-full grid place-items-center border border-slate-300 dark:border-slate-700"></div><span className="order-1 flex-1">Mark as Completed</span>
</label>
</div> */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium" >Save Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
