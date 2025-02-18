import React, { useState } from "react";
import { SubTasksListProps } from "../types/tasks";

import "../App.css";

const SubTasksList: React.FC<SubTasksListProps> = ({
  subTasks,
  taskId,
  addSubTask,
  toggleSubTaskCompleted,
}) => {
  const [subTaskTitle, setSubTaskTitle] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddSubTask = () => {
    if (subTaskTitle.trim()) {
      addSubTask(taskId, subTaskTitle);
      setSubTaskTitle("");
      setShowForm(false);
    }
  };

  return (
    <div className="subtask-list">
      <h4>SubTasks</h4>
      {!subTasks.length ? (
        <>
          <p>No subtasks yet</p>
        </>
      ) : (
        subTasks.map((subTask) => (
          <div key={subTask.id} className="subtask">
            <input
              type="checkbox"
              checked={subTask.completed}
              onChange={() => toggleSubTaskCompleted(taskId, subTask.id)}
            />
            <span className={subTask.completed ? "completed" : ""}>
              {subTask.title}
            </span>
          </div>
        ))
      )}
      {showForm ? (
        <div className="subtask-from">
          <input
            type="text"
            value={subTaskTitle}
            onChange={(e) => setSubTaskTitle(e.target.value)}
            placeholder="New SubTask"
          ></input>
          <button onClick={handleAddSubTask}>Add</button>
          <button onClick={() => setShowForm(false)}>Cansel</button>
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>addSubTask</button>
      )}
    </div>
  );
};

export default SubTasksList;
