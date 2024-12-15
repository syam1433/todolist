import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function onchangeVlaue(e) {
    setNewTask(e.target.value);
  }

  function addtask() {
    if (tasks.length >= 10) {
      window.alert("Maximum size reached");
    } else {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deletetask(index) {
    const updatetasks = tasks.filter((_, i) => i !== index);
    setTasks(updatetasks);
  }

  function movedowntask(index) {
    if (index < tasks.length - 1) {
      const update = [...tasks];
      [update[index], update[index + 1]] = [update[index + 1], update[index]];
      setTasks(update);
    }
  }

  function moveuptask(index) {
    if (index > 0) {
      const update = [...tasks];
      [update[index], update[index - 1]] = [update[index - 1], update[index]];
      setTasks(update);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-5">
        <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">
          To-Do List
        </h1>
        <div className="flex justify-center items-center gap-5 mb-10">
          <input
            onChange={onchangeVlaue}
            value={newTask}
            id="input"
            className="border border-gray-400 rounded-lg w-96 p-2 shadow focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your task"
          />
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-500 transition"
            onClick={addtask}
          >
            Add Task
          </button>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-3/5 bg-white shadow rounded-lg p-5">
            <ol className="list-decimal pl-5 space-y-4">
              {tasks.map((task, index) => (
                <li
                  className="flex justify-between items-center"
                  key={index}
                >
                  <span className="w-3/5 truncate text-gray-700">{task}</span>

                  <div className="flex gap-3">
                    <button
                      onClick={() => deletetask(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => moveuptask(index)}
                      className="bg-blue-400 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                    >
                      Move Up
                    </button>
                    <button
                      onClick={() => movedowntask(index)}
                      className="bg-blue-400 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                    >
                      Move Down
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
