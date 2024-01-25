import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './components/Screens/Login';
import Register from './components/Screens/Register'
import Home from './components/Screens/Home';
import CategoryList from './components/Main/CategoryList';
import ProductDetail from './components/Screens/ProductDetail';
import Cart from './components/Screens/Cart';
import Checkout from './components/Screens/Checkout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" HeaderRight={false}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="CategoryList" component={CategoryList} options={{ headerShown: false }}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail}/>
      <Stack.Screen name="Cart" component={Cart}/>
      <Stack.Screen name="Checkout" component={Checkout}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});