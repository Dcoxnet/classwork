import React, { useState } from "react";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      {
        text: newTask,
      },
    ]);
    setNewTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) => {
        return i === index ? { ...task, done: !task.done } : task;
      })
    );
  };

  return (
    <>
      <h2>Tasks List</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(index)}
              />
              <span style={{ textDecoration: task.done ? "line-through" : "" }}>
                {task.text}
              </span>
            </div>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>New Task</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          addTask();
        }}
      >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="button">Add task</button>
      </form>
    </>
  );
}

function Opp() {
  return <TasksList />;
}

export default Opp;
