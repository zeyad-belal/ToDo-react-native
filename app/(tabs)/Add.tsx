import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TextInput } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskList from '@/components/TaskList';
import { Task } from '@/lib/types';
import React, { useState } from 'react';
import {  Button } from 'react-native';


export default function TabTwoScreen() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [taskCategory, setTaskCategory] = useState<string>('');

  const addTask = () => {
    setTasks([...tasks, { id: `${Math.random()}`, title: taskText ,category:taskCategory }]);
    setTaskText('');
    setTaskCategory('')
  };

  const editTask = (id: string) => {
    // Implement edit functionality
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const reorderTask = (id: string) => {
    // Implement reorder functionality
  };



  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
            <ThemedView className="flex-1 p-5 bg-white">
      <TextInput
        value={taskText}
        onChangeText={setTaskText}
        className="h-10 border border-gray-400 mb-4 p-2"
      />
      <TextInput
        value={taskCategory}
        onChangeText={setTaskCategory}
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
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
