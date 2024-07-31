import { Task } from '@/lib/types';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface TaskItemProps {
  task: Task;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onReorder: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onReorder }) => {
  return (
    <View className="flex-row justify-between p-4 border-b border-gray-300">
      <Text className="text-base">{task.title}</Text>
      <View className="flex-row">
        <TouchableOpacity onPress={() => onEdit(task.id)} className="mr-2">
          <Text className="text-blue-500">Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)} className="mr-2">
          <Text className="text-red-500">Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onReorder(task.id)}>
          <Text className="text-green-500">Reorder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;
