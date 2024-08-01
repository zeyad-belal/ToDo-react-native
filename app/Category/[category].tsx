import TaskItem from "@/components/TaskItem";
import { useTasks } from "@/context/TasksContext";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page: React.FC = () => {
  const { category } = useLocalSearchParams();

  const { tasks } = useTasks();

  const filteredTasks = tasks.filter((task) => task.category === category);

  return (
    <SafeAreaView className="flex-1 p-5 pb-0 bg-black">
      <Pressable
        className="border border-gray-400 px-8 py-1  w-fit self-start rounded-3xl mb-2"
        onPress={() => router.back()}
      >
        <Text className="flex-row  font-semibold text-lg text-gray-400 w-fit">
          ←
        </Text>
      </Pressable>
      <Text className="mt-4 text-2xl text-white tracking-wider capitalize font-semibold mb-4">
        {category} Tasks :
      </Text>
      <FlatList
        data={filteredTasks}
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
