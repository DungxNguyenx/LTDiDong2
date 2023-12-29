import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, SafeAreaView, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
      <StatusBar style="auto" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Home} />
      </Stack.Navigator>
      </NavigationContainer>
    </View>
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