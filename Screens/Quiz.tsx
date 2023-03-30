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
  
const handleShuffleArray=(array:any)=>{
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


const Quiz = ({navigation}:Props) => {
    const [questions, setQuestions]= useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([""]);
    const [score, setScore]= useState(0)
    

    const getQuiz = async () =>{
      const url='https://the-trivia-api.com/api/questions/';
      const res= await fetch(url);
      const data= await res.json();
      console.log(data)
      setQuestions(data);
      setOptions(generateOptionsandShuffle(data[0]))
    };
    useEffect(()=>{
     getQuiz();
  },[]);

  const handleNextPress=()=>{
    setQues(ques+1);
  }

  const handleSelectedOption=(_option: any)=>{
    if(questions){
    if(_option === questions[ques]["correctAnswer"]){
      setScore(score+10)
    }
    if(ques!==9){
      setQues(ques+1)
      setOptions(generateOptionsandShuffle(questions[ques+1]))
    }
    if(ques===9)
    {
      handleShowResults
    }
  }
}

  const handleShowResults=()=>{
    navigation.navigate("Result", {score})
  }

  const generateOptionsandShuffle=(_question: any)=>{
    const options =[..._question["incorrectAnswers"]]
    options.push(_question["correctAnswer"])
 
    handleShuffleArray(options)
 
    return options
 }
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
      <View style={styles.question}>
        <Text style={styles.questionText}>{questions[ques]["question"]}</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
            <Text style={styles.optionsText}>{options[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
            <Text style={styles.optionsText}>{options[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
            <Text style={styles.optionsText}>{options[2]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
            <Text style={styles.optionsText}>{options[3]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>

        {ques !==9 && (<TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.bottomText}>SKIP</Text>
        </TouchableOpacity>)}

        {ques=== 9 && (<TouchableOpacity style={styles.button} onPress={handleShowResults}>
        <Text style={styles.bottomText}>Show Results</Text>
        </TouchableOpacity>)}
      </View>
      </View>
      )}
      </View>
  );
};

export default Quiz

const styles = StyleSheet.create({
    container:{
        padding :20,
        height:'100%'
       
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
    parent:{
      height:'100%'
    }
})