import type { Task } from "../types";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface HomeProps {
  tasks: Task[];
}

function Home({ tasks }: HomeProps) {
  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  const todayTasks = tasks.filter((task) =>
    task.datetime?.startsWith(todayString)
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Today's Tasks</h1>
        <p className="text-gray-500">Organize your day and stay productive!</p>
      </div>

      {todayTasks.length === 0 ? (
        <p className="text-gray-400 text-center text-lg mt-10">
          No tasks scheduled for today. Enjoy your free time!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {todayTasks.map((task) => {
            const time = new Date(task.datetime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });

            return (
              <div
                key={task.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border-l-4 border-purple-500 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Status Icon */}
                  {task.completed ? (
                    <CheckCircle2 className="text-green-500 w-6 h-6 flex-shrink-0" />
                  ) : (
                    <Circle className="text-gray-300 w-6 h-6 flex-shrink-0" />
                  )}

                  {/* Task Info */}
                  <div className="flex-1">
                    <h2
                      className={`text-lg font-semibold ${
                        task.completed ? "line-through text-gray-400" : "text-gray-900"
                      }`}
                    >
                      {task.title}
                    </h2>
                    <p className="text-gray-500 mt-1 text-sm">{task.description}</p>

                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{time}</span>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="mt-4 flex justify-end">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.completed ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"
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
    </div>
  );
}

export default Home;
