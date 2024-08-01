import {  Task } from "@/lib/types";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

interface TaskItemProps {
  task: Task;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onReorder: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onEdit,
  onDelete,
  onReorder,
}) => {

  return (
    <TouchableOpacity
      onPress={() => router.push(`/${task.id || '445'}`)}
      className="mr-2"
    >
      <View className="flex justify-between gap-y-2 px-4 py-2 my-2 bg-[#232323] rounded-xl">
        <View
          className={`py-1 px-2 rounded-full  max-w-fit self-start ${
            task.priority === "low"
              ? "bg-green-500"
              : task.priority === "medium"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          <Text className={`text-xs text-white capitalize font-light  `}>
            {task.priority}
          </Text>
        </View>
        <Text className="text-lg text-white tracking-wider capitalize font-medium">
          {task.title}
        </Text>
        <Text className="text-white tracking-wide capitalize font-light text-xs">
          {task.description}
        </Text>
        <View className="flex-row items-center">
          <Text className="text-gray-400 tracking-wide capitalize font-light text-xs">
            Due Date:{" "}
          </Text>
          <Text className="text-white tracking-wide capitalize font-light text-xs">
            {task.dueDate.toLocaleString()}
          </Text>
        </View>
        <View className="flex-row">
          {/* <TouchableOpacity onPress={() => onEdit(task.id)} className="mr-2">
          <Text className="text-blue-500">Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)} className="mr-2">
          <Text className="text-red-500">Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onReorder(task.id)}>
          <Text className="text-green-500">Reorder</Text>
        </TouchableOpacity> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
