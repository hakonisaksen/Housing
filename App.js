import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OldScreen from './Components/OldScreen';
import SummaryScreen from './Components/SummaryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
        <Stack.Screen name="OldScreen" component={OldScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}




