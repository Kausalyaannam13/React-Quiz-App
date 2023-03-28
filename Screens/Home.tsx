import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { RootStackParamList } from '../App';
import Quiz from './Quiz';
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};


const Home = ({navigation} : Props) => {
  return (
    <View style={styles.container}>
      <View style = {styles.title}>
      <Text style={styles.headText} >Quizio</Text>
      </View>
      <View style ={styles.bannerContainer}>
      <Image 
      source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/online-exam-7450819-6073431.png'}}
      style={styles.banner}
      />
      </View>
      <View >
      <TouchableOpacity style ={styles.button} onPress={()=>navigation.navigate("Quiz")}>
        <Text style={styles.buttonText} >Start</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
      height:'100%'
    },
    title:{
      flexDirection:'row',
      paddingVertical:50,
      justifyContent:'center',
      alignContent:'center',   
    },
    headText:{
      fontSize: 35,
      color:'black',
      fontWeight:'500'
    },
    banner:{
      width:300,
      height:300,
    },
    bannerContainer:{
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:80,
      flex:1,
    },

    button:{
      flexDirection:'row',
      paddingVertical:30,
      margin:40,
      justifyContent:'center',
      alignContent:'center',
      backgroundColor:'black',
      borderRadius:30,
    },
    buttonText:{
      fontSize:20,
    }

})