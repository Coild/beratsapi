import React, {Component} from 'react';
import { LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './src/home';
import Hitung from './src/hitung';
import About from './src/about';
import Konsul from './src/konsul';
import Gudang from './src/gudang'

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
      <Stack.Screen name="About" component={About}/>
      <Stack.Screen name="Konsul" component={Konsul}/>
      <Stack.Screen name="Gudang" component={Gudang}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
