# To-Do App
### link to download android build https://expo.dev/artifacts/eas/4kPWx5G4a7xBrHSR8huGEe.aab


## Project Overview

This To-Do App is designed to help users manage their tasks efficiently. Users can add, edit, delete, and reorder tasks. The app also provides the ability to filter tasks by category and status. Future improvements will include notifications for task due dates and enhanced UI with animations.

## Project Structure

app
├── (tabs)
│ ├── __layout.tsx
│ ├── Add.tsx
│ ├── AllTasks.tsx
│ ├── index.tsx
├── Category
│ └── [category].tsx
├── _layout.tsx
├── [TaskId]
├── +html
├── +not-found
assets
components
constants
hooks
lib
node_modules



- **app/(tabs)**: Contains the main tabs of the app.
  - **__layout.tsx**: Layout component for the tabs.
  - **Add.tsx**: Component for adding new tasks.
  - **AllTasks.tsx**: Component displaying all tasks with filtering options.
  - **index.tsx**: Landing page with links to the top 3 categories and ongoing tasks.
- **app/Category/[category].tsx**: Dynamic route for displaying tasks by category.
- **app/_layout.tsx**: General layout component.
- **app/[TaskId]**: Dynamic route for task details.
- **assets**: Contains static assets like images and icons.
- **components**: Reusable components.
- **constants**: Constants used throughout the app.
- **hooks**: Custom hooks.
- **lib**: Utility functions and libraries.
- **node_modules**: Project dependencies.

## Features
Add, edit, delete, and reorder tasks.
Filter tasks by category and status.
Draggable ongoing tasks.
Clickable tasks for detailed view.
Technologies Used
React Native: For building the mobile application.
Expo: For developing, building, and deploying the app.
TypeScript: For type safety and improved developer experience.
NativeWind: For styling the application using Tailwind CSS in React Native.
Tailwind CSS: For utility-first CSS framework.
@expo/vector-icons: For using vector icons in the app.
@react-native-async-storage/async-storage: For persistent storage of tasks.
@react-native-community/datetimepicker: For date and time picking functionality.
@react-navigation/native: For navigation within the app.
react-native-draglist: For draggable list functionality.
react-native-reanimated: For smooth animations.
react-native-root-toast: For toast notifications.
react-native-safe-area-context: For handling safe area insets.
react-native-screens: For native navigation components.
react-native-select-dropdown: For dropdown menus.
jest and jest-expo: For testing the application.

## Improvements
Notifications: Implement notifications for task due dates.
UI Enhancements: Improve the user interface and add animations.

## Additional Features
Subtasks: Allow users to create and manage subtasks.
Recurring Tasks: Enable users to set tasks that recur at regular intervals.
Priority Levels: Allow users to set priority levels for tasks.
