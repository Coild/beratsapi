import React, {Component} from 'react';
import { LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './src/home';
import Hitung from './src/hitung';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const Stack = createStackNavigator();
function  App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Hitung" component={Hitung}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
