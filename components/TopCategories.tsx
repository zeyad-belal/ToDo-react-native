import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTasks } from "../context/TasksContext";
import { RootStackParamList } from "@/lib/types";
import { HelloWave } from "./HelloWave";

interface Category {
  title: string;
  count: number;
}

const TopCategories: React.FC = () => {
  const { tasks } = useTasks();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const calculateTopCategories = (): Category[] => {
    const categoryCounts: { [key: string]: number } = {};

    tasks.forEach((task) => {
      categoryCounts[task.category] = (categoryCounts[task.category] || 0) + 1;
    });

    const categories = Object.keys(categoryCounts).map((title) => ({
      title,
      count: categoryCounts[title],
    }));

    categories.sort((a, b) => b.count - a.count);

    return categories.slice(0, 3);
  };

  const topCategories = calculateTopCategories();

  if (tasks.length === 0) {
    return null;
  }

  return (
    <View className="min-h-fit">
      <View className="px-6">
        <Text className="text-white font-light text-sm capitalize tracking-wider mb-2">
          Hello There <HelloWave></HelloWave>
        </Text>
        <Text className="text-white font-semibold text-3xl capitalize tracking-wider">
          Manage Your{" "}
        </Text>
        <Text className="text-white font-semibold text-3xl capitalize tracking-wider mb-5">
          Daily Tasks{" "}
        </Text>
      </View>

      <View className="flex-row px-6 pb-6">
        {topCategories[0] && (
          <View className="w-[30%]  rounded-xl mr-4 shadow-md  shadow-[#e4f19d60]">
            <TouchableOpacity
              className="bg-[#e5f19d] h-44 justify-center items-center  rounded-xl "
              onPress={() =>
                navigation.navigate("AllTasks", {
                  title: topCategories[0].title,
                })
              }
            >
              <Image
                source={require(`./../assets/images/categ/5.png`)}
                className="h-12 w-12"
              />
              <Text className="text-black font-semibold text-lg capitalize">
                {topCategories[0].title}
              </Text>
              <Text className="text-black font-light capitalize text-xs">
                {topCategories[0].count} Tasks
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View className="flex-1">
          {topCategories[1] && (
            <View className="flex-1 mb-2 rounded-xl  shadow-md  shadow-[#dbd4fe60]">
              <TouchableOpacity
                className="flex-row justify-around px-12  bg-[#dbd4fe] h-20  items-center  rounded-xl"
                onPress={() =>
                  navigation.navigate("AllTasks", {
                    title: topCategories[1].title,
                  })
                }
              >
                <Image
                  source={require(`./../assets/images/categ/2.png`)}
                  className="h-12 w-12"
                />
                <View>
                  <Text className="text-black font-semibold text-lg capitalize">
                    {topCategories[1].title}
                  </Text>
                  <Text className="text-black font-light capitalize text-xs">
                    {topCategories[1].count} Tasks
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          {topCategories[2] && (
            <View className="flex-1 mt-2 rounded-xl shadow-md  shadow-[#defff860]">
              <TouchableOpacity
                className="flex-row justify-around px-12 bg-[#defff8] h-20  items-center  rounded-xl"
                onPress={() =>
                  navigation.navigate("AllTasks", {
                    title: topCategories[2].title,
                  })
                }
              >
                <Image
                  source={require(`./../assets/images/categ/1.png`)}
                  className="h-12 w-12"
                />
                <View>
                  <Text className="text-black font-semibold text-lg capitalize">
                    {topCategories[2].title}
                  </Text>
                  <Text className="text-black font-light capitalize text-xs">
                    {topCategories[2].count} Tasks
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default TopCategories;
