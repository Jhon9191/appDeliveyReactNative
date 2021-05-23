import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import Register from './src/pages/register';
import 'react-native-gesture-handler';
import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
