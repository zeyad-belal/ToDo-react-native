export interface Task {
  id: string;
  title: string;
  category: string;
}

import { ParamListBase } from '@react-navigation/native';

export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  AllTasks: { title: string };
}