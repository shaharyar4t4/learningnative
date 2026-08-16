import { Text, View } from 'react-native'
import React from 'react'

const LearnJsx = () => {
    // is ko hum driect code me nhi saata ha bs hum call karsaata ha ..
    let name = 'shaharyar ali';
    const getAge = () =>{
        return 25;
    };
  return (

    <View>
      <Text>My name is {name}</Text>
      <Text>My age is {getAge()}</Text>
    </View>
  )
}

export default LearnJsx;

