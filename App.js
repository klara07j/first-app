import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Api from './screens/APIchallenge';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Api'>
        <Stack.Screen name="Api" component={Api}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


