import React from "react";
import SubTasksList from "./SubTasksList";

import { TasksListProps } from "../types/tasks";

import "../App.css";

const TaskList: React.FC<TasksListProps> = ({
  tasks,
  deleteTask,
  toggleTaskCompleted,
  addSubTask,
  toggleSubTaskCompleted,
}) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`task ${task.completed ? "completed" : ""}`}
          >
            <div className="task-info">
              <h3 className="task-title">{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button onClick={() => toggleTaskCompleted(task.id)}>
                {task.completed ? "done" : "in-process"}
              </button>
            </div>
            {!task.completed && (
              <SubTasksList
                subTasks={task.subTasks ?? []}
                taskId={task.id}
                addSubTask={addSubTask}
                toggleSubTaskCompleted={toggleSubTaskCompleted}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
