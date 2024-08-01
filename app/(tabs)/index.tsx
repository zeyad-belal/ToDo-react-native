import { TouchableOpacity, Text, View, FlatList } from "react-native";

import TopCategories from "@/components/TopCategories";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTasks } from "@/context/TasksContext";
import TaskItem from "@/components/TaskItem";
import { router } from "expo-router";

export default function HomeScreen() {
  const { tasks } = useTasks();

  return (
    <SafeAreaView className="pt-2">
      <TopCategories />

      {/* ===============================ACTIVE-TASKS============================== */}
      <View className="px-6 bg-black h-full ">
        <View className="flex-row justify-between gap-2 my-4">
          <Text className="text-white">Ongoing</Text>
          <TouchableOpacity
            className="w-fit justify-center items-center  rounded-xl "
            onPress={() =>
              router.push("/AllTasks")
            }
          >
            <Text className="text-gray-400 font-light text-xs capitalize">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem
              key={item.id}
              task={item}
              onEdit={() => {}}
              onDelete={() => {}}
              onReorder={() => {}}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 700 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
