import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
    // array is become the destructure. end me useState ko call karya ga ..
    const [name, setName] = useState('shaharyar');
    const updateName = () => {
        setName('fahad');
    }
  return (
    <View>
      <Text style ={{fontSize: 20}}>UseStateHook</Text>
      <Text>Name: {name}</Text>
      {/* not best partices */}
      {/* <Button title='Continous' onPress={() => setName('fahad')}/> */}
      <Button title='Continous' onPress={updateName}/>

    </View>
  )
}

export default UseStateHook;


// arr = [1, 2, 3];
// arr[one] = 1 // 0 index me ik value add karva do 
// arr[two] = 2 // 1 infex me ik value add karva do
// arr[three] = 3 // 3 index me ik value add karva do 

// is masla ko solve karna kiya liya JS na feature ko introduc kiya ha.. called array destructure.
        //  1    2     3
// const [arr1, arr2, arr3] = arr