import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
import ListScreen from './screens/ListScreen';
import StudentScreen from './screens/StudentScreen';
import ButtonScreen from './screens/ButtonScreen';
import QuizScreen from './screens/QuizScreen';
import MenuScreen from './screens/MenuSreen';
import StudentsScreen from './screens/StudentsScreen';
import ProfileScreen from './screens/Challenge-profileScreen';
import BoxScreen from './screens/BoxScreen';
import BoxScreenChallenge from './screens/BoxScreenChallenge';
import AdvancedBoxScreenChallenge from './screens/AdvancedBoxScreenChallenge';
import PostScreen from './screens/PostScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Students'>
        <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
        <Stack.Screen name="Quiz" component={QuizScreen}></Stack.Screen>
        <Stack.Screen name="Button" component={ButtonScreen}></Stack.Screen>
        <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
        <Stack.Screen name="Students" component={StudentsScreen}></Stack.Screen>
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
        <Stack.Screen name="Box" component={BoxScreen}></Stack.Screen>
        <Stack.Screen name="BoxChallenge" component={BoxScreenChallenge}></Stack.Screen>
        <Stack.Screen name="BoxAdvanced" component={AdvancedBoxScreenChallenge}></Stack.Screen>
        <Stack.Screen name="PostScreen" component={PostScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
