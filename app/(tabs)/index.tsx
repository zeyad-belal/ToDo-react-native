import { TouchableOpacity, Text, View, FlatList } from "react-native";

import TopCategories from "@/components/TopCategories";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTasks } from "@/context/TasksContext";
import TaskItem from "@/components/TaskItem";
import { router } from "expo-router";
import DragList, { DragListRenderItemInfo } from "react-native-draglist";
import { Task } from "@/lib/types";
import { useState } from "react";

function renderItem(info: DragListRenderItemInfo<Task>) {
  const { item, onDragStart, onDragEnd, isActive } = info;

  return (
    <TouchableOpacity
      key={item.id}
      onPressIn={onDragStart}
      onPressOut={onDragEnd}
      onPress={() => router.push(`/${item.id}`)}
      className="mr-14 "
    >
      <TaskItem key={item.id} task={item} />
    </TouchableOpacity>
  );
}

export default function Home() {
  const { tasks } = useTasks();
  const [activeTasks, setActiveTasks] = useState(
    tasks?.filter((task) => task.active)
  );

  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...activeTasks];
    const removed = copy.splice(fromIndex, 1);

    copy.splice(toIndex, 0, removed[0]);
    setActiveTasks(copy);
  }

  return (
    <SafeAreaView className="pt-2">
      <TopCategories />

      {/* ===============================ACTIVE-TASKS============================== */}
      <View className="px-6 bg-black h-full ">
        <View className="flex-row justify-between gap-2 my-4">
          <Text className="text-white">Ongoing</Text>
          <TouchableOpacity
            className="w-fit justify-center items-center  rounded-xl "
            onPress={() => router.push("/AllTasks")}
          >
            <Text className="text-gray-400 font-light text-xs capitalize">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        {!activeTasks?.length ? (
          <Text className="text-gray-300 mx-auto text-md  mt-4">
            Add active Tasks to appear here!
          </Text>
        ) : null}

        <DragList
          data={activeTasks}
          keyExtractor={(item) => item.id.toString()}
          onReordered={onReordered}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 700 }}
        />
      </View>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
