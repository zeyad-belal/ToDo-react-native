import TaskItem from "@/components/TaskItem";
import TaskList from "@/components/TaskList";
import { Task } from "@/lib/types";
import React, { useState } from "react";
import { View, TextInput, Button, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);


  const editTask = (id: string) => {
    // Implement edit functionality
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const reorderTask = (id: string) => {
    // Implement reorder functionality
  };


  return (
    <SafeAreaView className="flex-1 p-5 bg-white">
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onEdit={editTask}
            onDelete={deleteTask}
            onReorder={reorderTask}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
