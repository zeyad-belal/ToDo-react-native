export interface Task {
  id: string;
  category: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate:Date
}

import { ParamListBase } from "@react-navigation/native";

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  AllTasks: { title: string };
}
