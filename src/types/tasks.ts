export interface Task {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
  subTasks?: SubTask[];
}

export interface TasksListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  toggleTaskCompleted: (id: string) => void;
  addSubTask: (taskId: string, title: string) => void;
  toggleSubTaskCompleted: (tasksId: string, subTaskId: string) => void;
}

export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface SubTasksListProps {
  subTasks: SubTask[];
  taskId: string;
  addSubTask: (taskId: string, title: string) => void;
  toggleSubTaskCompleted: (tasksId: string, subTaskId: string) => void;
}

export interface TaskFormProps {
  addTask: (title: string, description: string) => void;
}
