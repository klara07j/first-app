import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Api from './screens/APIchallenge';
import CountriesScreen from './screens/CountriesScreen';
import StudentScreen from './screen/StudentScreen';
import ButtonScreen from './screens/ButtonScreen';
import CountryDetailsScreen from '../screens/CountryDetailsScreen';
import QuoteScreen from './screens/QuoteScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Api'>
        <Stack.Screen name="Api" component={Api}></Stack.Screen>
        <Stack.Screen name="Countries" component={CountriesScreen}></Stack.Screen>
        <Stack.Screen name="Students" component={StudentScreen}></Stack.Screen>
        <Stack.Screen name="Button" component={ButtonScreen}></Stack.Screen>
         <Stack.Screen name="Quote" component={QuoteScreen}></Stack.Screen>
        <Stack.Screen name="CountryDetailsScreen" component={CountryDetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


