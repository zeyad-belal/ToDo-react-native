import { Task } from "@/lib/types";
import { router } from "expo-router";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface TasksContextType {
  tasks: Task[];
  addNewTask: (task: Task) => void;
  editTask: (updatedTask: Task) => void;
  deleteTask: (id: string) => void;
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
    {
      title: "Complete React Native Advanced Tutorial",
      category: "programming",
      id: "1",
      description: "Finish the tutorial on React Native animations.",
      priority: "high",
      dueDate: new Date(2024, 7, 10, 17, 0),
      active: true,
    },
    {
      title: "Submit Gym Membership Renewal",
      category: "gym",
      id: "2",
      description: "Renew the membership at the local gym.",
      priority: "medium",
      dueDate: new Date(2024, 7, 5, 12, 0),
      active: false,
    },
    {
      title: "Review JavaScript Course",
      category: "programming",
      id: "3",
      description:
        "Go over the basics of JavaScript and practice coding challenges.",
      priority: "low",
      dueDate: new Date(2024, 7, 7, 18, 0),
      active: true,
    },
    {
      title: "Attend Yoga Class",
      category: "gym",
      id: "4",
      description: "Join the evening yoga class at the fitness center.",
      priority: "high",
      dueDate: new Date(2024, 7, 4, 19, 0),
      active: true,
    },
    {
      title: "Complete Portfolio Website",
      category: "web",
      id: "5",
      description: "Finish building the personal portfolio website.",
      priority: "medium",
      dueDate: new Date(2024, 7, 9, 23, 59),
      active: false,
    },
    {
      title: "Prepare for Tech Interview",
      category: "programming",
      id: "6",
      description:
        "Study data structures and algorithms for the upcoming interview.",
      priority: "high",
      dueDate: new Date(2024, 7, 8, 9, 0),
      active: true,
    },
    {
      title: "Grocery Shopping",
      category: "personal",
      id: "7",
      description: "Buy groceries for the week.",
      priority: "low",
      dueDate: new Date(2024, 7, 3, 10, 0),
      active: false,
    },
    {
      title: "Design New App UI",
      category: "design",
      id: "8",
      description: "Create the UI design for the new mobile application.",
      priority: "medium",
      dueDate: new Date(2024, 7, 12, 15, 0),
      active: true,
    },
  ]);

  const addNewTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
    router.back()
  };

  return (
    <TasksContext.Provider value={{ tasks, addNewTask, editTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};
