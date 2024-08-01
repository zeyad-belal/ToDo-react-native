import TaskItem from "@/components/TaskItem";
import { useTasks } from "@/context/TasksContext";
import React from "react";
import {  FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <SafeAreaView className="flex-1 p-5 pb-0 bg-black h-full ">
      <Text className="my-4 text-2xl text-white tracking-wider capitalize font-semibold">
        Your Tasks :
      </Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onEdit={() => {}}
            onDelete={() => {}}
            onReorder={() => {}}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Page;
