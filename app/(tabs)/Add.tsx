import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import { Task } from "@/lib/types";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function TabTwoScreen() {
  const [date, setDate] = useState(new Date(1598051730000));

  const [tasks, setTasks] = useState<Task[]>([]);

  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: `${Math.random()}`,
        title,
        category,
        description,
        priority,
        dueDate: date,
      },
    ]);
    Keyboard.dismiss();
    setTitle("");
    setCategory("");
    setDescription("");
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <SafeAreaView className="pt-2 h-full">
      <ScrollView className="flex-1 gap-y-6 p-5 bg-black h-full">
        <View className="flex-row gap-4 items-center mb-4">
          <Text className="text-white text-3xl font-semibold">
            Add new task
          </Text>
          <Image
            source={require(`./../../assets/images/pen.png`)}
            className="h-7 w-7"
          />
        </View>
        {/* ==================================Category================================== */}
        <TextInput
          value={category}
          onChangeText={setCategory}
          className="h-11 my-2 bg-[#232323] rounded-[4px] p-2 text-white "
          placeholder="Category"
        />
        {/* ==================================Title================================== */}
        <TextInput
          value={title}
          onChangeText={setTitle}
          className="h-11 my-2 bg-[#232323] rounded-[4px] p-2 text-white"
          placeholder="Title"
        />
        {/* ===================================Description=============================== */}
        <TextInput
          value={description}
          onChangeText={setDescription}
          className="h-44 my-2 bg-[#232323] rounded-[4px] p-2 text-white"
          placeholder="Description"
          multiline={true}
          numberOfLines={4}
        />
        {/* =====================================Priority===================================================*/}
        <View className="flex-row items-center justify-between ">
          <Text className="text-gray-500 text-sm font-semibold pl-1">
            Priority:
          </Text>
          <SelectDropdown
            data={[{ title: "Low" }, { title: "Medium" }, { title: "High" }]}
            onSelect={(selectedItem, index) => {
              setPriority(selectedItem);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem.title) ||
                      "Select your priority"}
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
        {/* =====================================Due-Date===================================================*/}
        <View className="flex-row items-center justify-between mb-12">
          <Text className="text-gray-500 text-sm font-semibold pl-1">
            Due Date:
          </Text>
          <View className="flex-row gap-x-2">
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              onChange={onChange}
              className="bg-white border border-red-400"
            />
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="time"
              is24Hour={true}
              onChange={onChange}
              className="bg-white border border-red-400"
            />
          </View>
        </View>

        {/* ================================================================================================== */}
        <Pressable
          className="bg-white px-10 py-2  w-fit mx-auto rounded "
          onPress={addTask}
        >
          <Text className="font-semibold text-lg text-[#232323] w-fit">
            Add task
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "50%",
    height: 44,
    backgroundColor: "#232323",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 7,
    marginVertical: 5,
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
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontWeight: "300",
    color: "white",
  },
});
