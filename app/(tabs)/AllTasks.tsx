import TaskItem from "@/components/TaskItem";
import { useTasks } from "@/context/TasksContext";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";

export default function AllTasks(){
  const { tasks } = useTasks();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTaskStatus, setSelectedTaskStatus] = useState("All");

  const userCategories = [
    { title: "All" },
    ...Array.from(new Set(tasks.map((task) => task.category))).map(
      (category) => ({ title: category })
    ),
  ];

  const filteredTasks = tasks.filter((task) => {
    const matchesCategory =
      selectedCategory === "All" || task.category === selectedCategory;
  
    const matchesStatus =
      selectedTaskStatus === "All" ||
      (selectedTaskStatus === "Active" && task.active) ||
      (selectedTaskStatus === "Non active" && !task.active);
  
    return matchesCategory && matchesStatus;
  });
  

  return (
    <SafeAreaView className="flex-1 p-5 pb-0 bg-black h-full ">
      <Text className="my-4 text-2xl text-white tracking-wider capitalize font-semibold">
        Your Tasks :
      </Text>
      <View className="flex-row justify-between">
        <SelectDropdown
          data={[
            { title: "All" },
            { title: "Active" },
            { title: "Non active" },
          ]}
          onSelect={(selectedItem, index) => {
            setSelectedTaskStatus(selectedItem.title);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || "Select Status"}
                </Text>
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#4d5154" }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />

        <SelectDropdown
          data={userCategories}
          onSelect={(selectedItem, index) => {
            setSelectedCategory(selectedItem.title);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={styles.dropdownButtonStyle}>
                <Text style={styles.dropdownButtonTxtStyle}>
                  {(selectedItem && selectedItem.title) || "Select Category"}
                </Text>
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={{
                  ...styles.dropdownItemStyle,
                  ...(isSelected && { backgroundColor: "#4d5154" }),
                }}
              >
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={styles.dropdownMenuStyle}
        />
      </View>
      <FlatList
        data={filteredTasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "40%",
    height: 44,
    backgroundColor: "#232323",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 7,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#3d4040",
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontWeight: "300",
    color: "white",
  },
  dropdownMenuStyle: {
    backgroundColor: "#232323",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#3d4040",
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontWeight: "300",
    color: "white",
  },
});
