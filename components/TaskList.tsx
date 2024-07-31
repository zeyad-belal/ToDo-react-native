import React from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from './TaskItem';
import { Task } from '@/lib/types';

interface TaskListProps {
  tasks: Task[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onReorder: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, onReorder }) => {
  return (
    <View className="flex-1">
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem 
            task={item}
            onEdit={onEdit}
            onDelete={onDelete}
            onReorder={onReorder}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TaskList;
