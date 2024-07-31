export interface Task {
  id: string;
  category: string;
  title: string;
  content: string;
  priority: "low" | "medium" | "high";
  dueDate:string
}

import { ParamListBase } from "@react-navigation/native";

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  AllTasks: { title: string };
}
