import { TouchableOpacity, Text, View } from "react-native";
import TopCategories from "@/components/TopCategories";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTasks } from "@/context/TasksContext";
import TaskItem from "@/components/TaskItem";
import { router } from "expo-router";
import DragList, { DragListRenderItemInfo } from "react-native-draglist";
import { Task } from "@/lib/types";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TASK_ORDER_KEY = "task_order";

function renderItem(info: DragListRenderItemInfo<Task>) {
  const { item, onDragStart, onDragEnd } = info;

  return (
    <TouchableOpacity
      key={item.id}
      onLongPress={onDragStart}
      onPressOut={onDragEnd}
      onPress={() => router.push(`/${item.id}`)}
    >
      <TaskItem key={item.id} task={item} />
    </TouchableOpacity>
  );
}

export default function Home() {
  const { tasks } = useTasks();
  const [activeTasks, setActiveTasks] = useState<Task[]>(
    tasks?.filter((task) => task.active)
  );

  // Store the order of task IDs
  const storeTaskOrder = async (order: string[]) => {
    try {
      await AsyncStorage.setItem(TASK_ORDER_KEY, JSON.stringify(order));
    } catch (e) {
      console.error("Error saving task order:", e);
    }
  };

  // Load the stored order of task IDs and apply it
  const loadTaskOrder = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(TASK_ORDER_KEY);
      if (jsonValue) {
        const storedOrder = JSON.parse(jsonValue);
        const orderedTasks = storedOrder.map((id: string) =>
          activeTasks.find((task) => task.id === id)
        );
        setActiveTasks(orderedTasks.filter((task:Task) => task));
      }
    } catch (e) {
      console.error("Error loading task order:", e);
    }
  };

  useEffect(() => {
    loadTaskOrder();
  }, []);

  async function onReordered(fromIndex: number, toIndex: number) {
    const copy = [...activeTasks];
    const removed = copy.splice(fromIndex, 1);

    copy.splice(toIndex, 0, removed[0]);
    setActiveTasks(copy);

    // Store the new order
    const newOrder = copy.map((task) => task.id.toString());
    storeTaskOrder(newOrder);
  }

  return (
    <SafeAreaView className="pt-2">
      <TopCategories />

      <View className="px-6 bg-black h-full ">
        <View className="flex-row justify-between gap-2 my-4">
          <Text className="text-white">Ongoing</Text>
          <TouchableOpacity
            className="w-fit justify-center items-center rounded-xl "
            onPress={() => router.push("/AllTasks")}
          >
            <Text className="text-gray-400 font-light text-xs capitalize">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        {!activeTasks?.length ? (
          <Text className="text-gray-300 mx-auto text-md mt-4">
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
