import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-root-toast";
import TaskForm from "@/components/TaskForm";

export default function TabTwoScreen() {
  const [toastMessage, setToastMessage] = useState<string>("");

  function handleToastMessage(mess: string) {
    setToastMessage(mess);
  }

  return (
    <SafeAreaView className="pt-2 h-full ">
      <TaskForm operation="add" handleToastMessage={handleToastMessage} />
      <Toast visible={toastMessage ? true : false}>{toastMessage}</Toast>
    </SafeAreaView>
  );
}


