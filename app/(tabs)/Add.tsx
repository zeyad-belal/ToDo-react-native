import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, TextInput } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TaskList from "@/components/TaskList";
import { Task } from "@/lib/types";
import React, { useState } from "react";
import { Button } from "react-native";
// import { Picker } from "@react-native-picker/picker";

export default function TabTwoScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("");

  const addTask = () => {
    setTasks([
      ...tasks,
      {
        id: `${Math.random()}`,
        title,
        category,
        content,
        priority,
        dueDate,
      },
    ]);
    setTitle("");
    setCategory("");
    setContent("");
  };

  const editTask = (id: string) => {
    // Implement edit functionality
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const reorderTask = (id: string) => {
    // Implement reorder functionality
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView className="flex-1 p-5 bg-white">
        <TextInput
          value={title}
          onChangeText={setTitle}
          className="h-10 border border-gray-400 mb-4 p-2"
        />
        <TextInput
          value={category}
          onChangeText={setCategory}
          className="h-10 border border-gray-400 mb-4 p-2"
        />
        <TextInput
          value={content}
          onChangeText={setContent}
          className="h-10 border border-gray-400 mb-4 p-2"
        />
        {/* <Picker
          selectedValue={priority}
          onValueChange={(itemValue:"low" | "medium" | "high") => setPriority(itemValue)}
          style={{ height: 50, width: '100%' }}
        >
          <Picker.Item label="Low" value="low" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="High" value="high" />
        </Picker> */}
        <TextInput
          value={dueDate}
          onChangeText={setDueDate}
          className="h-10 border border-gray-400 mb-4 p-2"
        />
        <Button title="Add Task" onPress={addTask} />
        <TaskList
          tasks={tasks}
          onEdit={editTask}
          onDelete={deleteTask}
          onReorder={reorderTask}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
