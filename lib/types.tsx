export interface Task {
  id: string;
  category: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate:Date
  active:boolean
}

