import React, { useState } from "react";
import { SubTasksListProps } from "../types/tasks";

const SubTasksList: React.FC<SubTasksListProps> = ({
  subTasks,
  taskId,
  addSubTask,
  toggleSubTaskCompleted,
}) => {
  const [subTaskTitle, setSubTaskTitle] = useState("");

  const handleAddSubTask = () => {
    if (subTaskTitle.trim()) {
      addSubTask(taskId, subTaskTitle);
      setSubTaskTitle("");
    }
  };

  return (
    <div>
      <h4>SubTasks</h4>
      {subTasks.length === 0 ? (
        <>
          <p>No subtasks yet</p>
        </>
      ) : (
        subTasks.map((subTask) => (
          <div key={subTask.id}>
            <input
              type="checkbox"
              checked={subTask.completed}
              onChange={() => toggleSubTaskCompleted(taskId, subTask.id)}
            ></input>
            <span>{subTask.title}</span>
          </div>
        ))
      )}
      <input
        type="text"
        value={subTaskTitle}
        onChange={(e) => setSubTaskTitle(e.target.value)}
        placeholder="New SubTask"
      ></input>
      <button onClick={handleAddSubTask}>Add SubTask</button>
    </div>
  );
};

export default SubTasksList;
