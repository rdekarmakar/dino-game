import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import GameMenuScreen from '../screens/GameMenuScreen';
import DinosaurRunner from '../games/dinosaur-runner/DinosaurRunner';
import MemoryMatch from '../games/memory-match/MemoryMatch';
import QuizGame from '../games/quiz/QuizGame';
// import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GameMenu" component={GameMenuScreen} />
        <Stack.Screen name="DinosaurRunner" component={DinosaurRunner} />
        <Stack.Screen name="MemoryMatch" component={MemoryMatch} />
        <Stack.Screen name="Quiz" component={QuizGame} />
        {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
