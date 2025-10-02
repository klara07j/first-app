import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
import ListScreen from './screens/ListScreen';
import StudentScreen from './screens/StudentScreen';
import ButtonScreen from './screens/ButtonScreen';
import QuizScreen from '.screens/QuizScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="quizScreen" component={QuizScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
