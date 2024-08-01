import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTasks } from "@/context/TasksContext";
import { router, useLocalSearchParams } from "expo-router";
import { Task } from "@/lib/types";
import TaskForm from "@/components/TaskForm";

export default function TaskDetails() {
  const { TaskId } = useLocalSearchParams();
  const { tasks, deleteTask } = useTasks();

  const [editingMode, setEditingMode] = useState<boolean>(false);

  const theTask = tasks.find((t: Task) => t.id === TaskId);

  const [updatedTask, setUpdatedTask] = useState<Task | null>(theTask || null);

  function closeEditingMode() {
    setEditingMode(false);
  }

  if (!theTask || !updatedTask) {
    return <Text className="mt-[30%] text-center text-white">Loading...</Text>;
  }

  return (
    <SafeAreaView className="flex-1 bg-black pt-6 px-4">
      {editingMode ? null : (
        <View>
          <View className="w-full flex-row items-center justify-between mb-6">
            <Pressable
              className="border border-gray-400 px-8 py-1  w-fit  rounded-3xl "
              onPress={() => router.back()}
            >
              <Text className="flex-row  font-semibold text-lg text-gray-400 w-fit">
                ←
              </Text>
            </Pressable>
            <View className="flex-row gap-2 justify-end">
              <TouchableOpacity
                onPress={() => setEditingMode(true)}
                className="mr-2"
              >
                <Text className="text-white text-lg font-medium">Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteTask(theTask.id)}
                className="mr-2"
              >
                <Text className="text-red-500 text-lg font-medium">Delete</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="px-3">
            <View
              className={`py-1 px-4 rounded-full max-w-fit self-start ${
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
            <Text className="mt-4 text-xs text-gray-500 tracking-wider capitalize font-semibold">
              Category : {theTask.category}
            </Text>
            <Text className="mt-4 text-3xl text-white tracking-wider capitalize font-semibold">
              {theTask.title}
            </Text>
            <Text className="mt-4 text-white tracking-tighter font-light text-lg">
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
          </View>
        </View>
      )}
      {editingMode ? (
        <TaskForm
          operation="edit"
          closeEditingMode={closeEditingMode}
          TaskToUpdate={theTask}
        />
      ) : null}
    </SafeAreaView>
  );
}
