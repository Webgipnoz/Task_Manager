import React from "react";
import { TasksListProps } from "../types/tasks";

const TaskList: React.FC<TasksListProps> = ({
  tasks,
  deleteTask,
  toggleTaskCompleted,
}) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => toggleTaskCompleted(task.id)}>
              {task.completed ? "+" : "-"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
