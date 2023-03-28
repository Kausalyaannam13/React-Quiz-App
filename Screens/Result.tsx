import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Result'>;
  type Props = {
    navigation: ProfileScreenNavigationProp;
  };
  

const Result = ({navigation}:Props) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({})