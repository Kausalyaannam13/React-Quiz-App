import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <View style = {styles.title}>
      <Text style={styles.headText} >Quizio</Text>
      </View>
      <View style ={styles.bannerContainer}>
      <Image 
      source={{uri:'https://cdn-icons-png.flaticon.com/512/3261/3261259.png'}}
      style={styles.banner}
      />
      </View>
      <View style ={styles.button}>
      <TouchableOpacity>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    title:{
      flexDirection:'row',
      paddingVertical:50,
      justifyContent:'center',
      alignContent:'center',
        
    },
    headText:{
      fontSize: 30,
    },
    banner:{
      width:300,
      height:300,
    },
    bannerContainer:{
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:80,
    },

    button:{
      flexDirection:'row',
      paddingVertical:30,
      marginLeft: 60,
      marginRight:60,
      justifyContent:'center',
      alignContent:'center',
      backgroundColor:'black',
      borderRadius:30,
    },
    buttonText:{
      fontSize:20
    }

})