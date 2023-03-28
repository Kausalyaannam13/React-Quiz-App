import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Quiz'>;
  type Props = {
    navigation: ProfileScreenNavigationProp;
  };
  

const Quiz = ({navigation}:Props) => {
    const [quesions, setQuestions]= useState();
    const [ques, setQues] = useState(0);

    const getQuiz = async () =>{
      const url='https://the-trivia-api.com/api/questions';
      const res= await fetch(url);
      const data= await res.json();
      setQuestions(data.results);
    };
    useEffect(()=>{
     getQuiz();
  },[]);
  return (
    <View style={styles.container}>
      {quesions&& (
      <View>
      <View style={styles.question}>
        <Text style={styles.questionText}>Question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionsText}>Option1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionsText}>Option2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionsText}>Option3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionsText}>Option4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.bottomText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.bottomText}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Result")}>
          <Text style={styles.bottomText}>END</Text>
        </TouchableOpacity>
      </View>
      </View>)}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        padding :20,
        height:'100%',
    },
    question:{
        paddingVertical: 20,
        paddingHorizontal:15
    },
    questionText:{
      fontSize:28,
      color:'black',
    },
    options:{
      paddingVertical: 15,
      paddingHorizontal:15,
      flex:1,
    },
    optionsText:{
      fontSize:18,
    },
    optionButton:{
      justifyContent:'center',
      alignContent:'center',
      backgroundColor:'black',
      padding:12,
      borderRadius:30,
      margin:12,
    },
    bottom:{
        flexDirection:'row',
        marginVertical:12,
        marginHorizontal:12,
        justifyContent:'space-between',
    },
    bottomText:{
      fontSize:18,
    },
    button:{
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      backgroundColor:'black',
      borderRadius:30,
      paddingHorizontal:18,
      paddingVertical:12
    },
})