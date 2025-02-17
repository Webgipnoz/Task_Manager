import { useState } from "react";
import { Task } from "./types/tasks";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress">(
    "all"
  );

  const getFilteredTasks = () => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }
    if (filter === "in-progress") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  };

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>completed</button>
        <button onClick={() => setFilter("in-progress")}>in-progress</button>
      </div>
      <TaskForm addTask={addTask}></TaskForm>
      <TasksList
        tasks={getFilteredTasks()}
        deleteTask={deleteTask}
        toggleTaskCompleted={toggleTaskCompleted}
      ></TasksList>
    </div>
  );
}

export default App;
