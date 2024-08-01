import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTasks } from "@/context/TasksContext";
import { useLocalSearchParams } from "expo-router";
import { Task } from "@/lib/types"; // Importing the Task type

export default function TaskDetails() {
  const { TaskId } = useLocalSearchParams();
  const { tasks } = useTasks();
  const theTask = tasks.find((t: Task) => t.id === TaskId);


  const editTask = (id: string) => {
    // Implement edit functionality
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  if (!theTask) {
    return <Text className="mt-[30%] text-center text-white">Loading...</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-black pt-6 px-4">
      <View>
        <View
          className={`py-1 px-3 rounded-full max-w-fit self-start ${
            theTask.priority === "low"
              ? "bg-green-500"
              : theTask.priority === "medium"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          <Text className="text-xs text-white capitalize font-light">
            {theTask.priority}
          </Text>
        </View>

        <TouchableOpacity onPress={() => editTask(task.id)} className="mr-2">
          <Text className="text-blue-500">Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)} className="mr-2">
          <Text className="text-red-500">Delete</Text>
        </TouchableOpacity>
      </View>

      <Text className="mt-4 text-2xl text-white tracking-wider capitalize font-semibold">
        {theTask.title}
      </Text>

      <Text className="mt-2 text-white tracking-wide font-light text-base">
        {theTask.description}
      </Text>

      <View className="mt-4 flex-row items-center">
        <Text className="text-gray-400 tracking-wide font-light text-sm">
          Due Date:{" "}
        </Text>
        <Text className="text-white tracking-wide font-light text-sm">
          {theTask.dueDate.toLocaleString()}
        </Text>
      </View>

      <View className="mt-4 flex-row gap-4">
        <Text className="text-gray-400 tracking-wide font-light text-sm">
          Status:{" "}
        </Text>
        <Text
          className={`${
            theTask.active ? "text-green-500" : "text-red-500"
          } tracking-wide font-light text-sm`}
        >
          {theTask.active ? "Active" : "Inactive"}
        </Text>
      </View>
    </SafeAreaView>
  );
}
