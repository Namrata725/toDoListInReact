function ToDoList() {
  return (
    <div className="toDoList">
      <h1>To-Do List</h1>
      <div className="inputcontainer">
        <input type="text" placeholder="Enter new task..." />
        <button className="addTask">Add Task</button>
      </div>

      <ol>
        <li>
          <input type="checkbox" disabled />
          <span className="text">Sample Task</span>
          <button className="btnDelete">🗑️</button>
          <button className="btnUp">↑</button>
          <button className="btnDown">↓</button>
        </li>
      </ol>
    </div>
  );
}

export default ToDoList;
