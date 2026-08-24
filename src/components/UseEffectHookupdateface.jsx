import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import InforDetail from './InforDetail'

const UseEffectHookupdateface = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(20);

    // ye useEffect is time call hoga jab score or counter hit hoga 
    // case --> let suppose humme it state ko update me call karna by using useeffect wo kese karya ga like me counter ko call karo to console wali line chala or score nhi chala ga..
    // counter kaya btn par click karta ho tu ye console chala ... but me jab score par click karo ga tu ye nhi chala ga..
    useEffect(()=>{
        console.log('Call the Use Effect Hook Counter <<<---');
    }, [counter]);

    // call multiple useEffect for different hooks.
    useEffect(()=>{
        console.log('Call the Use Effect Hook Score<<<---');
    }, [score]);

    // you also call multiple states in useEffect
    // useEffect(()=>{
    //     console.log('Call the Use Effect Hook <<<---');
    // }, [counter, Score]);
  return (
    <View>
      <Text style={style.heading}>UseEffect Hook Update</Text>
      <Text style={style.heading}>Counter: {counter}</Text>
      <Text style={style.heading}>Score: {score}</Text>

      <Button style={style.btn} title='Counter Increase' onPress={()=> setCounter(counter+1)}/>
      <Button style={style.btn} title='Score Increase' onPress={()=> setScore(score+1)}/>
      <InforDetail count ={counter} points ={score}/>
    </View>
  )
}

const style = StyleSheet.create({
    heading:{
        fontSize: 20,
        marginBottom:10,
    },
    btn:{
        marginBottom: 10,
    }
})
export default UseEffectHookupdateface