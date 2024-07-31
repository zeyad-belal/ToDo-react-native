import { Task } from '@/lib/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';


interface TasksContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const useTasks = (): TasksContextType => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return context;
};

export const TasksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {title:'todo',category:'mobile',id:'d'},
    {title:'todo',category:'web',id:'dd'},
    {title:'eheh',category:'web',id:'dd'},
    {title:'todo',category:'desgin',id:'ddd'},
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
