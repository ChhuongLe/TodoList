import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from './components/TodoList';
import Home from './components/Home';
import Task from './components/Task';

// This allows us the usage of having multiple screens in an app
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homePage" component={Home} />
        <Stack.Screen name="todoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}