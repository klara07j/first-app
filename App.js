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

const Stack = createStackNavigator();


export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Menu'>
       <Stack.Screen name="Main" component={MainScreen}></Stack.Screen>
       <Stack.Screen name="List" component={ListScreen}></Stack.Screen>
       <Stack.Screen name="Quiz" component={QuizScreen}></Stack.Screen>
       <Stack.Screen name="Button" component={ButtonScreen}></Stack.Screen>
       <Stack.Screen name="Menu" component={MenuScreen}></Stack.Screen>
     </Stack.Navigator>
    </NavigationContainer>
 );
}
