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

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      subTasks: [],
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

  const addSubTask = (taskId: string, subTaskTitle: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subTasks: [
                ...(task.subTasks ?? []),
                {
                  id: crypto.randomUUID(),
                  title: subTaskTitle,
                  completed: false,
                },
              ],
            }
          : task
      )
    );
  };

  const toggleSubTaskCompletion = (taskId: string, subTaskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subTasks: task.subTasks?.map((subtask) =>
                subtask.id === subTaskId
                  ? { ...subtask, completed: !subtask.completed }
                  : subtask
              ),
            }
          : task
      )
    );
  };

  const getFilteredTasks = () => {
    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }
    if (filter === "in-progress") {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>completed</button>
        <button onClick={() => setFilter("in-progress")}>in-progress</button>
      </div>
      <TaskForm addTask={addTask}></TaskForm>
      <TasksList
        tasks={getFilteredTasks()}
        deleteTask={deleteTask}
        toggleTaskCompleted={toggleTaskCompleted}
        addSubTask={addSubTask}
        toggleSubTaskCompleted={toggleSubTaskCompletion}
      ></TasksList>
    </div>
  );
}

export default App;
