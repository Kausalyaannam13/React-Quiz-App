import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Screens/Home'
import Quiz from './Screens/Quiz'
import Result from './Screens/Result'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './Navigation'
import { createStackNavigator } from '@react-navigation/stack';
export type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Profile: { name: string }; 
  Quiz :undefined,
  Result: undefined,
};

const Stack = createStackNavigator<RootStackParamList>();


const App = () => {
  return (
  
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})