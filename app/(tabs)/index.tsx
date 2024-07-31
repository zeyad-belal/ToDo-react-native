import {
  StyleSheet,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TopCategories from "@/components/TopCategories";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/types";
import { useTasks } from "@/context/TasksContext";
import TaskItem from "@/components/TaskItem";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { tasks } = useTasks();
  return (
    <SafeAreaView className="pt-2">
      <TopCategories />

      {/* ===============================ACTIVE-TASKS============================== */}
      <View className="px-6 bg-black h-full">
        <View className="flex-row justify-between gap-2 my-4">
          <ThemedText>Ongoing</ThemedText>
          <TouchableOpacity
            className="w-fit justify-center items-center  rounded-xl "
            onPress={() =>
              navigation.navigate("AllTasks", {
                title: "all",
              })
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
        />
      </View>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
