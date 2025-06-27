import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return alert("Please enter a task");
    setTasks((prev) => [...prev, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="toDoList">
      <h1>To-Do List</h1>
      <div className="inputcontainer">
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addTask" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span
              className="text"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                marginLeft: "8px",
              }}
            >
              {task.text}
            </span>
            <button className="btnDelete" onClick={() => deleteTask(index)}>
              🗑️
            </button>
            <button className="btnUp" onClick={() => moveUp(index)}>
              ↑
            </button>
            <button className="btnDown" onClick={() => moveDown(index)}>
              ↓
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
