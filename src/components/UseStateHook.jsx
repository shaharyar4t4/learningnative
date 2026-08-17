import { View, Text } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
    // array is become the destructure. end me useState ko call karya ga ..
    const [name, setName] =useState();
  return (
    <View>
      <Text style ={{fontSize: 20}}>UseStateHook</Text>
    </View>
  )
}

export default UseStateHook;

// arr = [1, 2, 3];
// arr[one] = 1 // 0 index me ik value add karva do 
// arr[two] = 2 // 1 infex me ik value add karva do
// arr[three] = 3 // 3 index me ik value add karva do 