import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { RouteProp } from '@react-navigation/native';
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Result'>;
  type Props = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
  };
  
const Result = ({route,navigation}:Props) => {
  const scoreValue =route.params.score;
  const resultImage= scoreValue>=50?"https://cdni.iconscout.com/illustration/premium/thumb/employees-celebrating-victory-4550612-3773903.png":"https://cdni.iconscout.com/illustration/premium/thumb/from-failure-to-success-8088446-6504082.png";
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.headText}>Your Score</Text>
        <Text style={styles.scoreValue}>{route.params.score}</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
    source={{
      uri:resultImage,
    }}
    style={styles.banner}/>
    </View>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
      <Text style={styles.buttonText}>
        Home
      </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container:{
    height:'100%'
  },
  title:{
    flexDirection:'column',
    paddingVertical:50,
    marginLeft:110,
    justifyContent:'center',
    alignContent:'center',   
  },
  headText:{
    fontSize: 35,
    color:'black',
    fontWeight:'500'
  },
  scoreValue:{
    color:'black',
    marginLeft:85,
    marginTop:30
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:80,
    flex:1,
  },
  banner:{
    width:300,
    height:350,
  },
  button:{
    flexDirection:'row',
    paddingVertical:20,
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