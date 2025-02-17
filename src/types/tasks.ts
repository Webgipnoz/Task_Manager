export interface Task {
  id: string;
  title: string;
  description: string;
  completed?: boolean;
}

export interface TasksListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  toggleTaskCompleted: (id: string) => void;
}

export interface TaskFormProps {
  addTask: (title: string, description: string) => void;
}
