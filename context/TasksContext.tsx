import { Task } from "@/lib/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TasksContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

export const TasksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([
    { title: "got to gym", category: "mobile", id: "d", content: "this is a task" ,priority:'low',dueDate:'30 dec' },
    { title: "buy some gorecry", category: "web", id: "dddf", content: "this is a task" ,priority:'high',dueDate:'30 dec' },
    { title: "play cs go", category: "web", id: "ddgs", content: "this is a task" ,priority:'low',dueDate:'30 dec' },
    { title: "study dsa", category: "desgin", id: "ddd", content: "this is a task" ,priority:'medium',dueDate:'30 dec' },
  ]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};
