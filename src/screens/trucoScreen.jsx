import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from './styles';

const TrucoScreen = () =>{

  const [score1, setScore1] = useState(0)
  const [score2, setScore2] = useState(0)

  const [teamPoints1, setTeamPoints1] = useState(0)
  const [teamPoints2, setTeamPoints2] = useState(0)
 
  const plusOperation1 = () =>{
    if(score1 >= 12){
      return null
    }if(score1 == 11){
      setScore1(0)
      setTeamPoints1(teamPoints1 +1)
    }else{
    setScore1(score1 + 1)
    }
  }

  const minusOperation1 = () =>{
    if(score1 <= 0){
      return null
    }
    setScore1(score1 - 1)
  }

  const plusOperation2 = () =>{
    if(score2 >= 12){
      return null
    }if(score2 == 11){
      setScore2(0)
      setTeamPoints2(teamPoints2 +1)
    }else{
    setScore2(score2 + 1)
    }
  }

  const minusOperation2 = () =>{
    if(score2 <= 0){
      return null
    }
    setScore2(score2 - 1)
  }

  const resetOperation = () =>{
    return(
      setScore1(0),
      setScore2(0)
    )
  }

  



  return (
    <View style={styles.container}>
        <View style={styles.sideContainer}>
          <View style={{alignItems:'center'}}>  
            <Text style={styles.text}>{teamPoints1}</Text>
            <Text style={styles.teams}>nós</Text>
          </View>
          <Text style={styles.scoreText}>{score1}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={plusOperation1} style={styles.lessAndPlusButtons}><AntDesign name="plus" size={26} color="black" /></TouchableOpacity>
            <TouchableOpacity onPress={minusOperation1} style={styles.lessAndPlusButtons}><AntDesign name="minus" size={26} color="black" /></TouchableOpacity>
          </View>
        </View>

        <View style={styles.column}></View>
        
        <View style={styles.resetContainer}>
          <TouchableOpacity onPress={resetOperation} style={styles.resetButton}><Text style={styles.text}>zerar</Text></TouchableOpacity>
        </View>
        
        <View style={styles.sideContainer}>
          <View style={{alignItems:'center'}}>  
            <Text style={styles.text}>{teamPoints2}</Text>
            <Text style={styles.teams}>eles</Text>
          </View>
          <Text style={styles.scoreText}>{score2}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={plusOperation2} style={styles.lessAndPlusButtons}>
            <AntDesign name="plus" size={26} color="black" /></TouchableOpacity>
            <TouchableOpacity onPress={minusOperation2} style={styles.lessAndPlusButtons}><AntDesign name="minus" size={26} color="black" /></TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

export default TrucoScreen