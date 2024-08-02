# To-Do App
### link to download android build https://expo.dev/artifacts/eas/eYPnFkoR9ePhxbELff3kJu.aab


## Project Overview

This To-Do App is designed to help users manage their tasks efficiently. Users can add, edit, delete, and reorder tasks. The app also provides the ability to filter tasks by category and status. Future improvements will include notifications for task due dates and enhanced UI with animations.

## Project Structure

##app
 ├── (tabs) <br />
 │ ├── __layout.tsx <br />
 │ ├── Add.tsx <br />
 │ ├── AllTasks.tsx <br />
 │ ├── index.tsx <br />
 ├── Category <br />
 │ └── [category].tsx <br />
 ├── _layout.tsx <br />
 ├── [TaskId] <br />
 ├── +html <br />
 ├── +not-found <br />
 assets <br />
 components <br />
 constants <br />
 hooks <br />
 lib <br />
 node_modules <br />



- **app/(tabs)**: Contains the main tabs of the app. <br />
  - **__layout.tsx**: Layout component for the tabs. <br />
  - **Add.tsx**: Component for adding new tasks. <br />
  - **AllTasks.tsx**: Component displaying all tasks with filtering options. <br />
  - **index.tsx**: Landing page with links to the top 3 categories and ongoing tasks. <br />
- **app/Category/[category].tsx**: Dynamic route for displaying tasks by category. <br />
- **app/_layout.tsx**: General layout component. <br />
- **app/[TaskId]**: Dynamic route for task details. <br />
- **assets**: Contains static assets like images and icons. <br />
- **components**: Reusable components. <br />
- **constants**: Constants used throughout the app. <br />
- **hooks**: Custom hooks. <br />
- **lib**: Utility functions and libraries. <br />
- **node_modules**: Project dependencies. <br />

## Features
Add, edit, delete, and reorder tasks. <br />
Filter tasks by category and status. <br />
Draggable ongoing tasks. <br />
Clickable tasks for detailed view. <br />

## Technologies Used <br />
React Native: For building the mobile application. <br />
Expo: For developing, building, and deploying the app. <br />
TypeScript: For type safety and improved developer experience. <br />
NativeWind: For styling the application using Tailwind CSS in React Native. <br />
Tailwind CSS: For utility-first CSS framework. <br />
@expo/vector-icons: For using vector icons in the app. <br />
@react-native-async-storage/async-storage: For persistent storage of tasks. <br />
@react-native-community/datetimepicker: For date and time picking functionality. <br />
@react-navigation/native: For navigation within the app. <br />
react-native-draglist: For draggable list functionality. <br />
react-native-reanimated: For smooth animations. <br />
react-native-root-toast: For toast notifications. <br />
react-native-safe-area-context: For handling safe area insets. <br />
react-native-screens: For native navigation components. <br />
react-native-select-dropdown: For dropdown menus. <br />
jest and jest-expo: For testing the application. <br />
 
## Improvements
Notifications: Implement notifications for task due dates. <br />
UI Enhancements: Improve the user interface and add animations. <br />

## Additional Features
Subtasks: Allow users to create and manage subtasks. <br />
Recurring Tasks: Enable users to set tasks that recur at regular intervals. <br />
Priority Levels: Allow users to set priority levels for tasks.
