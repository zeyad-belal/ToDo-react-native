import { Task } from "@/lib/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TasksContextType {
  tasks: Task[];
  addNewTask: (task: Task) => void;
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
    { title: "got to gym", category: "mobile", id: "533", description: "this is a task" ,priority:'low',dueDate:new Date(1598051730000), active:true },
    { title: "buy some gorecry", category: "web", id: "435", description: "this is a task" ,priority:'high',dueDate:new Date(1598051730000), active:true },
    { title: "play cs go", category: "web", id: "6526", description: "this is a task" ,priority:'low',dueDate:new Date(1598051730000), active:false },
    { title: "study dsa", category: "desgin", id: "876532", description: "this is a task" ,priority:'medium',dueDate:new Date(1598051730000), active:true },
  ]);

  const addNewTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addNewTask }}>
      {children}
    </TasksContext.Provider>
  );
};
